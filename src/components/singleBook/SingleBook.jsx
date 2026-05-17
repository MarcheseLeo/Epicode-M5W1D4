import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./SingleBook.css";
import { CommentArea } from "../commentArea/CommentArea";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

export const SingleBook = ({ title, img, price, category, asin }) => {
  const navigate = useNavigate();
  const { computedTheme } = useContext(ThemeContext);

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/book-details/${asin}`);
  };
  return (
    <Col>
      <Card className={`${computedTheme}`}>
        <Card.Img variant="top" src={img} alt="" />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text className="price">${price}</Card.Text>
          <Button variant="primary" onClick={handleClick}>
            More info
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
