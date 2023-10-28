import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to='/home'>
        <img src='./src/assets/footerLogo.svg' alt="logo2" />
      </Link>
      <ul className="footer__list">
        <li style={{ cursor: 'pointer' }}>О компании</li>
        <li style={{ cursor: 'pointer' }}>Контакты</li>
        <li style={{ cursor: 'pointer' }}>Вакансии</li>
        <li style={{ cursor: 'pointer' }}>Статьи</li>
        <li style={{ cursor: 'pointer' }}>Политика обработки персональных данных</li>
      </ul>
      <img src='./src/assets/Social.png' alt="social" />
      <div>
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <p>8 800 777 33 33</p>
        </div>
        <div className="design">
          <span>Дизайн    </span>
          <img src='./src/assets/logo-zasovskiy-small-black.png' alt="disagn" />
        </div>
      </div>
    </footer>
  );
}
