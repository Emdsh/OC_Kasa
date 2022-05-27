import logo from '../../assets/logo.svg'

function getYear() {
  return new Date().getFullYear()
}

function Footer() {
  return (
    <footer className="footer">
      <a href="./">
        <img src={logo} alt="Kasa" className="footer__logo" />
      </a>

      <p className="footer__copyright">
        © 2020 - {getYear()} Kasa — All rights reserved
      </p>
    </footer>
  )
}

export default Footer
