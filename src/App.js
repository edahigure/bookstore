import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <div className="Bookstore-CMS">
        <div className="panel-bg">

          <nav className="nav-bar">
            <div className="Bookstore-CMS-2 ">
              Bookstore CMS
            </div>

            <ul className="list-1">
              <li><Link to="/books" className="li-item">BOOKS</Link></li>
              <li><Link to="/categories" className="li-item li-item-2">CATEGORIES</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route index element={<Books />} />
            <Route path="books" element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
