import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import logo from '../../assets/images/logo.svg'

function Header() {
  const location = useLocation().pathname

  return (
    <header className="header">
      <Link to='/'>
        <img src={logo} alt="Kasa" className="header__logo" />
      </Link>

      <nav>
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link to='/' className={`header__menu-link ${location === '/' ? 'underlined' : ''}`}>
              Accueil
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to='/about' className={`header__menu-link ${location === '/about' ? 'underlined' : ''}`}>
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.string
}

export default Header
