import React, { useContext, useEffect, useState } from "react";
import "./CommentArea.css";
import { CommentList } from "./CommentList";

import Button from "react-bootstrap/Button";
import { AddComment } from "./AddComment";
import Alert from "react-bootstrap/Alert";
import { Container, Row } from "react-bootstrap";
import { UpdateComment } from "./UpdateComment";
import { LoadingCircle } from "../loadingCircle/LoadingCircle";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./CommentArea.css";

export const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [editCommentId, setEditCommentId] = useState(null);

  const { computedTheme } = useContext(ThemeContext);

  console.log(comments);
  const getComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA3MzA2ZGQ2M2FhMTAwMTUxM2RlNzMiLCJpYXQiOjE3Nzg4NTYwNDUsImV4cCI6MTc4MDA2NTY0NX0.DBSJZFArPEvEv7AtQ4ANDDJzMogPuuD5DandZX0UyOE",
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
        setError("");
        // console.log("Dati ricevuti dalla fetch:", data)
      } else {
        throw new Error("Errore del server");
      }
    } catch (e) {
      setError(e.message);
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (asin) getComments();
    setEditCommentId(null);
  }, [asin]);

  return (
    <>
      <div className={`sidebar-comments p-3  rounded ${computedTheme}`}>
        <h3 className=" pb-2 mb-3">Sezione commenti</h3>
        {loading && (
          <div className="d-flex justify-content-center align-content-center my-5">
            <LoadingCircle></LoadingCircle>
          </div>
        )}
        {!loading && (
          <div className="comment-body">
            {comments && (
              <CommentList
                comments={comments}
                callback={getComments}
                editCommentId={editCommentId}
                setEditCommentId={setEditCommentId}
              ></CommentList>
            )}
            {!comments && (
              <Alert variant="danger" className="my-4">
                <Alert.Heading>Qualcosa è andato storto</Alert.Heading>
                <p>{error}</p>
              </Alert>
            )}
            {!editCommentId && (
              <AddComment asin={asin} callback={getComments}></AddComment>
            )}
            {editCommentId && (
              <UpdateComment asin={editCommentId} callback={getComments} />
            )}
          </div>
        )}
      </div>
    </>
  );
};
