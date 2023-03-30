import { useState } from 'react';
import { Card, Col, Form, Button, Container } from "react-bootstrap";

import './profile-view.scss';

export const ProfileView = (
  user,
  books,
  onLoggedOut,
  updateUser,
  token
) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  let favorites = books.filter((book) =>
    user.favoriteBooks.includes(book.id)
  );

  const updateUser = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
      email,
      birthday,
    };
  
    fetch(
      `https://my-books-series-tracker.herokuapp.com/${user.username}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('User not updated');
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert('User updated');
          updateUser(user);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  const deleteUser = () => {
    fetch(
      `https://my-books-series-tracker.herokuapp.com/${user.username}`,
      {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert('Account deleted');
          onLoggedOut();
        } else {
          alert('Could not delete account');
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <Card className="h-100">
      <Card.Header>Hello {user.username}</Card.Header>
      <Card.Body>
        <Card.Text>Username: {user.username}</Card.Text>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>Birthday: {user.birthday}</Card.Text>
        <Card.Text>Faviorites: {user.favorites}</Card.Text>
      </Card.Body>
    </Card>
  );

};
