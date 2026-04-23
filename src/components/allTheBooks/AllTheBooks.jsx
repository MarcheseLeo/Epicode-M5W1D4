import React from 'react'
import fantasyBooks from '../../books/fantasy.json'
import historyBooks from '../../books/history.json'
import horrorBooks from '../../books/horror.json'
import scifiBooks from '../../books/scifi.json'
import romanceBooks from '../../books/romance.json'
import { MyBookCard } from '../myBookCard/MyBookCard'
import { Container, Row } from 'react-bootstrap'

export const AllTheBooks = () => {
  return (
    <>
        <Container>
            <h2>Fantasy</h2>
            <Row xs={2} md={3} lg={4}>
                {fantasyBooks.map(book => <MyBookCard key={book.asin} img={book.img} title={book.title} price={book.price} category={book.category}/>)}
            </Row>
        </Container>
    </>
  )
}
