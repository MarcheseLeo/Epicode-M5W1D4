import { BaseLayout } from "../layouts/baseLayout/BaseLayout";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CommentArea } from "../components/commentArea/CommentArea";
import fantasyBooks from "../books/fantasy.json";
import historyBooks from "../books/history.json";
import horrorBooks from "../books/horror.json";
import scifiBooks from "../books/scifi.json";
import romanceBooks from "../books/romance.json";

export const BookDetails = () => {
  const { asin } = useParams();
  const books = [
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...scifiBooks,
    ...romanceBooks,
  ];

  const book = books.find((book) => book.asin === asin);
  console.log(book);
  return (
    <BaseLayout>
      <Container className="py-5">
        <Row xs={1} lg={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title className="text-truncate">{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text className="price">${book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h2>Dettagli {asin}</h2>
            <CommentArea asin={asin} />
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};
