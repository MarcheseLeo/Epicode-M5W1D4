import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button, Form } from 'react-bootstrap';
import { Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './MyNav.css'

export const MyNav = ({input, handleInputChange}) => {
    const { theme, toggleTheme, computedTheme } = useContext(ThemeContext)
    const Icon = theme ? Sun : Moon

    return (
        <Navbar expand="lg" className={`nav-custom ${computedTheme}`} >
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>

                <div className="d-flex align-items-center order-lg-last gap-2">
                    <Form className=''>
                        <Form.Group className="mb-3m my-0">
                            <Form.Control type="input" placeholder='Cerca un libro' value={input} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                    <button
                        className="btn btn-outline-secondary me-2 theme-btn"
                        onClick={toggleTheme}
                    >
                        <Icon></Icon>
                    </button>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex gap-2">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/browse">Browse</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
