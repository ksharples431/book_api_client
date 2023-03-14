export const BookView = ({ book, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={book.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{book.author}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{book.genre}</span>
      </div>
      <div>
        <span>Series: </span>
        <span>{book.series}</span>
      </div>
      <div>
        <span>Book: </span>
        <span>{book.number}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{book.description}</span>
      </div>
      <div>
        <span>Owned: </span>
        <span>{book.owned}</span>
      </div>
      <div>
        <span>Read: </span>
        <span>{book.read}</span>
      </div>
      <div>
        <span>Favorite: </span>
        <span>{book.favorite}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
