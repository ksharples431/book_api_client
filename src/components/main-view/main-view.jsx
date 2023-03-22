import { useState, useEffect } from 'react';
import { BookCard } from '../book-card/book-card';
import { BookList } from '../book-list/book-list'
import { BookView } from '../book-view/book-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './main-view.scss';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://my-books-series-tracker.herokuapp.com/books', {
      headers: { Authorization: `Bearer ${token}` },
    })
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
            favorite: book.favorite,
          };
        });
        setBooks(booksFromApi);
      });
  }, [token]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}/>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/books/:bookId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <BookView books={books} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {books.map((book) => (
 
                        <BookList book={book} />

                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>

  );
};
