import React from 'react';
// import NavMenuToggle from './layout/NavMenuToggle';

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="./img/logo-nav.png" alt="Logo" />
          BeingFit
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#program" className="nav__link">
                Program
              </a>
            </li>
            <li className="nav__item">
              <a href="#choose" className="nav__link">
                Choose Us
              </a>
            </li>
            <li className="nav__item">
              <a href="#pricing" className="nav__link">
                Pricing
              </a>
            </li>
            <li className="nav__item">
              <div className="nav__link">
                <a href="#footer" className="button nav__button">
                  Register Now
                </a>
              </div>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        {/* <!-- Toggle button --> */}
        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-menu-line"></i>
        </div>
      </nav>
      {/* <NavMenuToggle /> */}
    </header>
  );
}

export default Header;
