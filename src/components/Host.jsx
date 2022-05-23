import image from '../assets/images/temp/profilepic.jpg'

function Host() {
  return(
    <figure className='host'>
      <img src={image} alt="" className='host__profile-picture'/>
      <figcaption className='host__name'>
        <p>Alexandre Dumas</p>
      </figcaption>
    </figure>
  )
}

export default Host