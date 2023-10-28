import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({goToAddCard}) {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to='/home'>
         <img src='./src/assets/logo(5).svg' alt="logo1" />
        </Link>
        <div className="header__nav-search">
          <button>
            <i className="fa-solid fa-bars"></i>
            Каталог
          </button>
          <div className="search">
            <input type="text" name="seachProduct" placeholder="Найти товар" />
            <img className="search-img" src="./src/assets/search.svg" alt="" />
          </div>
        </div>
        <div className="header__nav-option">
          <div className="icon">
            <Link to="/favourites">
            <img src="./src/assets/favourites-img.svg" alt="" />
              <p>Избранное</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/allproducts">
              <img src="./src/assets/Frame211.svg" alt="" />
              <p>продукты</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/basket">
              <img src="./src/assets/korzina-img.svg" alt="" />
              <p>Корзина</p>
            </Link>
          </div>
          <button className='register' onClick={() =>goToAddCard()}>
            <div className='register_div'>
              <img className='img1' src="./src/assets/avatar.svg" alt="" />
              <h1>Крутой2011</h1>
              <img className='img2' src="./src/assets/Button.svg" alt="" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
