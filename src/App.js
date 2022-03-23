import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';



function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <h1>Library Catalog</h1>
          <BookList />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
