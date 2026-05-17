import { useContext, useEffect, useState } from "react";
import { SingleBook } from "../singleBook/SingleBook";
import { Container, Row, Col } from "react-bootstrap";
import "./AllTheBooks.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CommentArea } from "../commentArea/CommentArea";

export const AllTheBooks = ({ title, books }) => {
  const { computedTheme } = useContext(ThemeContext);
  const [isSelected, setIsSelected] = useState("");
  return (
    <>
      <Container className={`books-container ${computedTheme}`}>
        <h2 className="my-4">{title}</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="gy-4">
          {books.map((book) => (
            <SingleBook
              key={book.asin}
              img={book.img}
              title={book.title}
              price={book.price}
              category={book.category}
              asin={book.asin}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};
