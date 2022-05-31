import logo from '../../assets/images/logo_house.svg'

function Loader() {
  return (
    <div className="loader">
      <img src={logo} alt="" className="loader__image" />
    </div>
  )
}

export default Loader
