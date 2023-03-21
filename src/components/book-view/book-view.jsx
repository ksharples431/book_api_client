import { Button, Card } from 'react-bootstrap';
import './book-view.scss';

export const BookView = ({ book, onBackClick }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Text className="title">{book.title}</Card.Text>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>Genre: {book.genre}</Card.Text>
        <Card.Text>Series: {book.series}</Card.Text>
        <Card.Text>Book: {book.number}</Card.Text>
        <Card.Text>Description: {book.description}</Card.Text>
        <Card.Text>Owned: {book.owned}</Card.Text>
        <Card.Text>Read: {book.read}</Card.Text>
        <Card.Text>Favorite: {book.favorite}</Card.Text>
        <Button onClick={onBackClick} variant="link">
          Back
        </Button>
      </Card.Body>
    </Card>
  );
};
