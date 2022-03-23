import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';



function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
      </main>
      <Switch>
        <Route exact path="/bookList">
          <BookList />
        </Route>
        <Route exact path="/books/:id">
          <BookDetail />
        </Route> 
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
