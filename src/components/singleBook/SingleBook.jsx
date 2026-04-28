import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css'

export const SingleBook = ({ title, img, price, category }) => {
    const [isSelected, setIsSelected] = useState(false)
    return (
        <Col >
            <Card onClick={()=>setIsSelected(!isSelected)} className= {isSelected ? 'selected' : ''} >
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
            </Card>
        </Col>
    )
}
