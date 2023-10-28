import "./Footer.css";
import logo2 from "../../../assets/logo (6).svg";
import social from "../../../assets/Social.png";
import disign from "../../../assets/logo-zasovskiy-small-black.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to='/home'>
        <img src={logo2} alt="logo2" />
      </Link>
      <ul className="footer__list">
        <li style={{ cursor: 'pointer' }}>О компании</li>
        <li style={{ cursor: 'pointer' }}>Контакты</li>
        <li style={{ cursor: 'pointer' }}>Вакансии</li>
        <li style={{ cursor: 'pointer' }}>Статьи</li>
        <li style={{ cursor: 'pointer' }}>Политика обработки персональных данных</li>
      </ul>
      <img src={social} alt="social" />
      <div>
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <p>8 800 777 33 33</p>
        </div>
        <div className="design">
          <span>Дизайн    </span>
          <img src={disign} alt="disagn" />
        </div>
      </div>
    </footer>
  );
}
