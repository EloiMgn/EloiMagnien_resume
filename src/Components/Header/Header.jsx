import './Header.scss'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = () => (
  <section id="header" className='header'>
    <div className='header__right'>
      <div className='header__right--logo'>
        <a className='header__right--logo__link magic-hover magic-hover__around' href="#section-started">Eloi <strong>MAGNIEN</strong></a>
      </div>
    </div>
    <div className='header__left'>
      <nav className='header__left--nav'>
        <ul className='menu'>
          <li className='menu__item'>
            <a className='menu__item__link magic-hover magic-hover__around' href="#section-started">Accueil</a>
          </li>
          <li className='menu__item'>
            <a className='menu__item__link magic-hover magic-hover__around' href="#section-career">Parcours</a>
          </li>
          <li className='menu__item'>
          <a className='menu__item__link magic-hover magic-hover__around' href="#section-portfolio">Portfolio</a>
          </li>
          <li className='menu__item'>
          <a className='menu__item__link magic-hover magic-hover__around' href="#section-contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="theme magic-hover magic-hover__around">
        <ToggleTheme />
      </div>
    </div>
  </section>
)

export default Header
