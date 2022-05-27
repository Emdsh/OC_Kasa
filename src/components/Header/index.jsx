import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <header className="header">
      <Link to='/'>
        <img src={logo} alt="Kasa" className="header__logo" />
      </Link>

      <nav>
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link to='/' className="header__menu-link">
              Accueil
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to='/about' className="header__menu-link">
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
