import image from '../../assets/images/temp/profilepic.jpg'

function Host(props) {
  const { name } = props

  return (
    <figure className="host">
      <img src={image} alt="" className="host__profile-picture" />
      <figcaption className="host__name">
        <p>{name}</p>
      </figcaption>
    </figure>
  )
}

export default Host
