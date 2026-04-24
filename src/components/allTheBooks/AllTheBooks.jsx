import React from 'react'
import { MyBookCard } from '../myBookCard/MyBookCard'
import { Container, Row } from 'react-bootstrap'

export const AllTheBooks = ({title, books}) => {
  return (
    <>
        <Container>
            <h2 className='my-4'>{title}</h2>
            <Row xs={1} sm={2} md={3} lg={4} className='gy-4'>
                {books.map(book => <MyBookCard key={book.asin} img={book.img} title={book.title} price={book.price} category={book.category}/>)}
            </Row>
        </Container>
    </>
  )
}
