import { useState } from 'react';

const Bookshelf = () => {
  // Initialize state for books array
  const [books, setBooks] = useState([
    { title: 'Harry Potter', author: 'J.K. Rowling' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  // Initialize state for new book form inputs
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* Form will go here */}
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;