import { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
export const MyToast = ({ variant, message }) => {
    const [showA, setShowA] = useState(true);

    const toggleShowA = ({variant, message}) => setShowA(!showA);
    return (
        <ToastContainer position='bottom-end' className='p-5'>
            <Toast show={showA} onClose={toggleShowA} bg={variant.toLowerCase()} className='text-light'>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
