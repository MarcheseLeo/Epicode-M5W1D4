import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css'
import { CommentArea } from '../commentArea/CommentArea';

export const SingleBook = ({ title, img, price, category, asin }) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleSelected = () => setIsSelected(!isSelected)
    
    return (
        <Col >
            <Card onClick={handleSelected} className={isSelected ? 'selected' : ''} >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-truncate'>{title}</Card.Title>
                    <Card.Text>
                        {category}
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Button variant="primary">More info</Button>
                </Card.Body>
                {isSelected  && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <CommentArea
                            asin={asin}
                            show={isSelected}
                            handleClose={handleSelected}
                        />
                    </div>
                )}
            </Card>
        </Col>
    )
}
