import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className='header'>
      <a href='./'>
        <img src={logo} alt='Kasa' className='header__logo'/>
      </a>
      
      <nav>
        <ul className='header__menu'>
          <li className='header__menu-item'>
            <a href='./' className='header__menu-link'>Accueil</a>
          </li>
          <li className='header__menu-item'>
            <a href='./about' className='header__menu-link'>À propos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
