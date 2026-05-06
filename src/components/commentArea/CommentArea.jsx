import React, { useContext, useEffect, useState } from 'react'
import './CommentArea.css'
import { CommentList } from './CommentList'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AddComment } from './AddComment';
import Alert from 'react-bootstrap/Alert';
import { Container, Row } from 'react-bootstrap';
import { UpdateComment } from './UpdateComment';
import { LoadingCircle } from '../loadingCircle/LoadingCircle';
import { ThemeContext } from '../../contexts/ThemeContext';
import './CommentArea.css'

export const CommentArea = ({ asin, show, handleClose }) => {
    const [comments, setComments] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [editCommentId, setEditCommentId] = useState(null)

    const {computedTheme} = useContext(ThemeContext)

    console.log(comments)
    const getComments = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ2NjE3MjUzMjU4OTAwMTU2MjAyOWEiLCJpYXQiOjE3Nzc1NzEwMTQsImV4cCI6MTc3ODc4MDYxNH0.KD0Q3RpupkQZ-PMEyt8q_Ne7eUyX12U2epR2UNyfMnE"
                }
            })
            if (response.ok) {
                const data = await response.json()
                setComments(data)
                // console.log("Dati ricevuti dalla fetch:", data)
            } else {
                throw new Error('Errore del server')
            }

        } catch (e) {
            setError(e)
        } finally {
            await new Promise((res)=>{
                setTimeout(()=>{setLoading(false)},1000)
            })
        }
    }

    useEffect(() => {
        getComments()
    }, [])


    return (
        <>
            <Modal show={show} onHide={handleClose} className={computedTheme}>
                <Modal.Header closeButton>
                    <Modal.Title>Sezione commenti</Modal.Title>
                </Modal.Header>
                {loading && (
                    <div className='d-flex justify-content-center align-content-center my-5'>
                        <LoadingCircle></LoadingCircle>
                    </div>
                )}
                {!loading && (
                    <Modal.Body>
                        {comments && (
                            <CommentList comments={comments} callback={getComments} editCommentId={editCommentId} setEditCommentId={setEditCommentId}></CommentList>
                        )}
                        {!comments && (
                            <Alert variant="danger" className='my-4'>
                                <Alert.Heading>Qualcosa è andato storto</Alert.Heading>
                                <p>
                                    {error}
                                </p>
                            </Alert>
                        )}
                        {!editCommentId && (
                            <AddComment onClick={handleClose} asin={asin} callback={getComments} ></AddComment>
                        )}
                        {editCommentId && (
                            <UpdateComment
                                onClick={handleClose} asin={editCommentId} callback={getComments}
                            />
                        )}
                    </Modal.Body>
                )}
            </Modal>
        </>
    )
}
