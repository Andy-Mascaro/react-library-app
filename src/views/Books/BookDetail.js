import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';
import { useParams, NavLink } from 'react-router-dom';
// import { NavLink} from 'react-dom'

function BookDetail() {
  const params = useParams();
  const id = params.id; // TODO: Use id from route
  const [book, setBook] = useState(null);

  useEffect(() => {
   
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <>
      <NavLink exact to={'/bookList'}>
        <p>Return To Books List</p>
      </NavLink>
      <Book book={book} showDetail />;
    </>
  );
  
}

export default BookDetail;
