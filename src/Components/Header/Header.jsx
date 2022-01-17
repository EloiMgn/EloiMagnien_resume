import './Header.scss';

const Header = () => (
  <section id="header" className='header'>
    <div className='header__right'>
      <div className='header__right--logo'>
        <p>Eloi <strong>MAGNIEN</strong></p>
      </div>
    </div>
    <div className='header__left'>
      <nav className='header__left--nav'>
        <ul className='menu'>
          <li className='menu__item'>
            <a href="#section-started">Accueil</a>
          </li>
          <li className='menu__item'>
            <a href="#section-career">Parcours</a>
          </li>
          <li className='menu__item'>
          <a href="#section-portfolio">Portfolio</a>
          </li>
          <li className='menu__item'>
          <a href="#section-contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  );

export default Header;