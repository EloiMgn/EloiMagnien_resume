import './Footer.scss'
// import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Footer = () => (
  <footer id="footer" className='footer'>
    <div className='header__right'>
      <div className='header__right--logo'>
        <a className='header__right--logo__link magic-hover magic-hover__around' href="/">Eloi <strong>MAGNIEN</strong></a>
      </div>
    </div>
    <div className='footer__credentials'>
      <p>Mentions légales</p>
      |
      <p>Gestion des cookies</p>
    </div>
    <div className='footer__up'>
    Retour en haut de la page
    </div>
  </footer>
)

export default Footer
