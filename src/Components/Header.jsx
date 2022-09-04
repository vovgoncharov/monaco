import Home from "./Home";
import { useState } from "react";
const Header = () => {
  const [display, setDisplay] = useState(true);
  return (
    <header className="header">
      <div className="container">
        <div className="top_nav">
          <div className="logo">Monaco</div>
          <nav className="menu">
            <ul className={display ? "laptop__nav" : "laptop__nav-block"}>
              <li className="nav-item">
                <a className="link" href="#about_one">
                  Про нас
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#service_two">
                  Послуги
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#master_three">
                  Майстри
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#works_four">
                  Роботи
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#footer_five">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <ul>
              <li className="social-item">
                <div
                  onClick={() => setDisplay(!display)}
                  className="line__wrapper"
                >
                  {display ? (
                    <div className="line"></div>
                  ) : (
                    <div className="line2"></div>
                  )}
                </div>
              </li>
              <li className="social-item">
                <a className="link facebook" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="social-item">
                <a
                  className="link instagram"
                  href="https://www.instagram.com/monaco.beauty_studio/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Home />
    </header>
  );
};
export default Header;
