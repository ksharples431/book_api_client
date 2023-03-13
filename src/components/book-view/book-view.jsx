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
        <span>Series: </span>
        <span>{book.series}</span>
      </div>
      <div>
        <span>Series Number: </span>
        <span>{book.number}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
