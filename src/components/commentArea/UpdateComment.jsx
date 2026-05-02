import { use, useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { Star } from 'lucide-react'

export const UpdateComment = ({ asin, onClick, callback }) => {
    const [form, setForm] = useState({
        comment: '',
        rate: ''
    })
    const [error, setError] = useState('')
    const [hover, setHover] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isFormValid) {
            alert("Per favore, compila tutti i campi prima di inviare.");
            return;
        }
        postNewComment()
        console.log(form)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const isFormValid = form.comment.trim() !== '' && form.rate !== '';

    const postNewComment = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                method: "PUT",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ2NjE3MjUzMjU4OTAwMTU2MjAyOWEiLCJpYXQiOjE3Nzc1NzEwMTQsImV4cCI6MTc3ODc4MDYxNH0.KD0Q3RpupkQZ-PMEyt8q_Ne7eUyX12U2epR2UNyfMnE",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    comment: form.comment,
                    rate: Number(form.rate), // Converte la stringa in numero intero
                })
            })

            if (response.ok) {
                callback()
                console.log("Commento salvato con successo!")
                // Opzionale ma consigliato: svuota il form dopo il successo
                setForm({ author: '', comment: '', rate: '' })

                // Se vuoi chiudere la modale in automatico dopo il salvataggio:
                // onClick() 
            } else {
                console.error("Errore dal server durante il salvataggio")
                alert("Errore durante il salvataggio del commento.")
            }
            console.log(response)
        } catch (e) {
            console.error("Errore di rete:", e)
        } finally {

        }
    }

    useEffect(() => {
        getComment()
    }, [])

    const getComment = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ2NjE3MjUzMjU4OTAwMTU2MjAyOWEiLCJpYXQiOjE3Nzc1NzEwMTQsImV4cCI6MTc3ODc4MDYxNH0.KD0Q3RpupkQZ-PMEyt8q_Ne7eUyX12U2epR2UNyfMnE"
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setForm({
                    comment: data.comment,
                    rate: data.rate
                })

                // console.log("Dati ricevuti dalla fetch:", data)
            } else {
                throw new Error('Errore del server')
            }

        } catch (e) {
            setError(e)
        }
    }


    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 mt-3">
            <h2 className="fs-4">Modifica comento</h2>
            <textarea rows={5} className="form-control" name="comment" placeholder="Inserisci un commento" onChange={handleChange} required value={form.comment} />
            <div className="d-flex align-content-center gap-2 mt-2">
                <p className="fs-5">Rating:</p>
                <div>
                    {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;

                        return (
                            <Star
                                key={index}
                                size={28}
                                style={{ cursor: "pointer", transition: "color 0.2s ease-in-out" }}

                                color={ratingValue <= (hover || form.rate) ? "#ffc107" : "#e4e5e9"}
                                fill={ratingValue <= (hover || form.rate) ? "#ffc107" : "#e4e5e9"}

                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}

                                onClick={() => setForm({ ...form, rate: ratingValue })}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-3">
                <Button variant="secondary" onClick={onClick}>
                    Close
                </Button>
                <Button variant="primary" type="submit" disabled={!isFormValid}>
                    Save Changes
                </Button>
            </div>
        </form>
    )
}
