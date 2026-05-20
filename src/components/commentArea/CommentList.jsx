import './CommentList.css'
import Button from 'react-bootstrap/Button';
import { Star } from 'lucide-react'
export const CommentList = ({ comments, callback, editCommentId, setEditCommentId }) => {

    const handleDelete = async (e) => {
        const id = e.target.closest('li').getAttribute('id')
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA3MzA2ZGQ2M2FhMTAwMTUxM2RlNzMiLCJpYXQiOjE3Nzg4NTYwNDUsImV4cCI6MTc4MDA2NTY0NX0.DBSJZFArPEvEv7AtQ4ANDDJzMogPuuD5DandZX0UyOE",
                    "Content-Type": "application/json"
                },
            })
            if (response.ok) {
                console.log('Commento eliminato con successo')
                callback()
            } else {
                throw new Error("Non è stato possibile eliminare il commento")
            }
        } catch (e) {
            console.error(e)
        }
    }

    const getDate = (date) => {
        const d = new Date(date)

        return `${d.toLocaleString().split(',')[0]}`
    }
    // console.log(comments)
    return (
        <ul className='comment-list py-3'>
            {comments.map((comment, index) => {
                const isThisCommentEdited = editCommentId === comment._id;
                return (
                    <li className={isThisCommentEdited ? 'comment-item edit' : 'comment-item'} key={comment["_id"]} id={comment["_id"]} data-testid="single-comment">
                        <div className=' d-flex justify-content-between'>
                            <h2 className='comment-author text-truncate'>{comment.author}</h2>
                            <div className='d-flex gap-2 align-content-center'>
                                <button
                                    className={isThisCommentEdited ? "setting-btn active" : "setting-btn"}
                                    onClick={() => { setEditCommentId(isThisCommentEdited ? null : comment._id) }}
                                >
                                    <span className="bar bar1"></span>
                                    <span className="bar bar2"></span>
                                    <span className="bar bar1"></span>
                                </button>

                                <button className="bin-button" onClick={handleDelete}>
                                    <svg
                                        className="bin-top"
                                        viewBox="0 0 39 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
                                        <line
                                            x1="12"
                                            y1="1.5"
                                            x2="26.0357"
                                            y2="1.5"
                                            stroke="white"
                                            strokeWidth="3"
                                        ></line>
                                    </svg>
                                    <svg
                                        className="bin-bottom"
                                        viewBox="0 0 33 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask id="path-1-inside-1_8_19" fill="white">
                                            <path
                                                d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                            ></path>
                                        </mask>
                                        <path
                                            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                            fill="white"
                                            mask="url(#path-1-inside-1_8_19)"
                                        ></path>
                                        <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                                        <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div className='d-flex flex-column gap-2'>   
                            <div className='d-flex align-items-center gap-2'>
                                <span className='comment-rating d-flex align-items-center'>
                                    {
                                        [...Array(5)].map((_, i) => {
                                            return <Star size={20} key={i} color={i < comment.rate ? '#FCBF02' : '#e4e5e9'} fill={i < comment.rate ? '#FCBF02' : '#e4e5e9'} />
                                        })
                                    }
                                </span>
                                <p className="creation-date">{getDate(comment.createdAt)}</p>
                            </div>
                            <p className='comment text-truncate m-0'>{comment.comment}</p>
                        </div>

                    </li>
                )
            }).reverse()}
        </ul >
    )
}
