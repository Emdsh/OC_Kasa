import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

function getYear() {
  return new Date().getFullYear()
}

function Footer() {
  return (
    <footer className="footer">
      <Link to='/'>
        <img src={logo} alt="Kasa" className="footer__logo" />
      </Link>

      <p className="footer__copyright">
        © 2020 - {getYear()} Kasa — All rights reserved
      </p>
    </footer>
  )
}

export default Footer
