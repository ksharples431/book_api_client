import { useState } from 'react';

export const MainView = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Code Zero',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
    },
    {
      id: 2,
      title: 'Predator One',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
    },
    {
      id: 3,
      title: 'Dogs of War',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
    },
    {
      id: 4,
      title: 'Patient Zero',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
    },
    {
      id: 5,
      title: 'Extinction Machine',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
    },
  ]);

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {books.map((book) => {
        return <div key={book.id}>{book.title}</div>;
      })}
    </div>
  );
};

