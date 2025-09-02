import { useState } from 'react';

const Bookshelf = () => {
  // Initialize state for books array
  const [books, setBooks] = useState([
    { title: 'Harry Potter', author: 'J.K. Rowling' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  // Initialize state for new book form inputs
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Handle input changes for form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Handle form submission to add new book
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;