import image from '../../assets/images/about/about_banner_1440w.jpg'
import Thumb from '../../components/Thumb'

function Portfolio() {
  const title = 'Titre de la location'

  const listItems = []
  for (let i = 0; i < 7; i += 1) {
    listItems.push(
      <li key={`li-${i}`}>
        <Thumb image={image} title={title} />
      </li>
    )
  }

  return (
    <main>
      <ul className="portfolio">{listItems}</ul>
    </main>
  )
}

export default Portfolio