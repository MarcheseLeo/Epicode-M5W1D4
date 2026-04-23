import React from 'react'
import { Welcome } from '../welcome/Welcome'
import { AllTheBooks } from '../allTheBooks/AllTheBooks'
import { Container, Row } from 'react-bootstrap'

export const MyMain = () => {
    return (
        <>
            <Container>
                <Row><Welcome /></Row>
            </Container>
            <AllTheBooks />
        </>
    )
}
