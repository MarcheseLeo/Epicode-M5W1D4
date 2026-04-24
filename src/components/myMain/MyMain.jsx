import React, { useState } from 'react'
import { Welcome } from '../welcome/Welcome'
import { AllTheBooks } from '../allTheBooks/AllTheBooks'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import fantasyBooks from '../../books/fantasy.json'
import historyBooks from '../../books/history.json'
import horrorBooks from '../../books/horror.json'
import scifiBooks from '../../books/scifi.json'
import romanceBooks from '../../books/romance.json'


export const MyMain = () => {
    const [index, setindex] = useState(0)
    const [length, setLength] = useState(150)
    const list = [
        {
            title: 'Fantasy',
            books: fantasyBooks
        },
        {
            title: 'History',
            books: historyBooks
        },
        {
            title: 'Horror',
            books: horrorBooks
        },
        {
            title: 'Romance',
            books: romanceBooks
        },
        {
            title: 'Sci-fi',
            books: scifiBooks
        },
    ]

    const increment = () => {
        setindex((index < 4) ? index + 1 : index)
    }
    const decrement = () => {
        setindex((index > 0) ? index - 1 : index)
    }
    const handleLengthChange = (e) => {
        let value = parseInt(e.target.value);
        
        if (isNaN(value)) {
            setLength('');
            return;
        }

        if (value > 150) value = 150;
        if (value < 1) value = 1;

        setLength(value);
    }
    return (
        <>  
            <Container>
                <Row>
                    <Welcome />
                </Row>
            </Container>
            <Form className='w-25 mx-auto my-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Number of books</Form.Label>
                    <Form.Control type="number" value={length} min={1} max={150} onChange={handleLengthChange}/>
                    <Form.Text className="text-muted">
                        Scegli un numero di libri da visualizzare (Max 150).
                    </Form.Text>
                </Form.Group>
            </Form>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center gap-5'>
                        <Button onClick={decrement} variant="primary">Go prev</Button>
                        <Button onClick={increment} variant="primary">Go next</Button>
                    </Col>
                </Row>
            </Container>
            <AllTheBooks 
                title={list[index].title}
                books={list[index].books.slice(0, length).reverse()}
            />
        </>
    )
}
