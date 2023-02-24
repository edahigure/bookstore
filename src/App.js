import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <nav>
        <h1>Bookstore CMS </h1>
        <ul>
          <li><Link to="/books">Books</Link></li>
          <li> <Link to="/categories">Categories</Link></li>
        </ul>               
      </nav>

      <Routes>
        <Route index element={<Books />} />
        <Route path="books" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
