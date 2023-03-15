import { useState, useEffect } from 'react';
import { BookCard } from '../book-card/book-card';
import { BookView } from '../book-view/book-view';

export const MainView = () => {
  const [books, setBooks] = useState([]);

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch('https://my-books-series-tracker.herokuapp.com/books')
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.map((book) => {
          return {
            id: book._id,
            image: book.image,
            title: book.title,
            author: book.author,
            genre: book.genre,
            series: book.series,
            number: book.number,
            description: book.description,
            owned: book.owned,
            // availibility: book.availibility,
            read: book.read,
            favorite: book.favorite
          };
        });

        setBooks(booksFromApi);
      });
  }, []);

  if (selectedBook) {
    return (
      <BookView
        book={selectedBook}
        onBackClick={() => setSelectedBook(null)}
      />
    );
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onBookClick={(newSelectedBook) => {
            setSelectedBook(newSelectedBook);
          }}
        />
      ))}
    </div>
  );
};
