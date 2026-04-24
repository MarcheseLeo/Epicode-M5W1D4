import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyBookCard.css'

export const MyBookCard = ({ title, img, price, category }) => {
    return (
        <Col >
            <Card>
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
