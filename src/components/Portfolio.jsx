import image from '../assets/images/about_banner_1440w.jpg'
import PortfolioTile from './PortfolioTile'

function Portfolio() {
  const title = 'Titre de la location';

  const listItems = [];
  for (let i = 0; i < 7; i += 1) {
    listItems.push(<li key={`li-${i}`}><PortfolioTile image={image} title={title} /></li>)
  }

  return (
    <main>
      <ul className='portfolio'>
        {listItems}
      </ul>
    </main>
  )
}

export default Portfolio
