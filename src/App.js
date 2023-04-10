import './App.css';
import {
  NavLink, Route, Routes,
} from 'react-router-dom';
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
              <li><NavLink to="/books" className="li-item">BOOKS</NavLink></li>
              <li><NavLink to="/categories" className="li-item li-item-2">CATEGORIES</NavLink></li>
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
