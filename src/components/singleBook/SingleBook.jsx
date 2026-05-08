import React, { useContext, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css'
import { CommentArea } from '../commentArea/CommentArea';
import { ThemeContext } from '../../contexts/ThemeContext';

export const SingleBook = ({ title, img, price, category, asin, isSelected, setIsSelected }) => {

    const handleSelected = () => {
        const isAlreadySelected  = isSelected==asin 
        if(isAlreadySelected)
            setIsSelected('')
        else
            setIsSelected(asin)
    }
    
    const {computedTheme} = useContext(ThemeContext)
    const selectecStyle = isSelected==asin ? 'selected' : ''

    return (
        <Col >
            <Card onClick={handleSelected} className={ `${computedTheme} ${selectecStyle}`} >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-truncate'>{title}</Card.Title>
                    <Card.Text>
                        {category}
                    </Card.Text>
                    <Card.Text className='price'>
                        ${price}
                    </Card.Text>
                    <Button variant="primary">More info</Button>
                </Card.Body>
                {/* {isSelected  && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <CommentArea
                            asin={asin}
                            show={isSelected}
                            handleClose={handleSelected}
                        />
                    </div>
                )} */}
            </Card>
        </Col>
    )
}
