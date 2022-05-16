import PortfolioTile from './PortfolioTile'

function Portfolio() {
  const listItems = [];
  for (let i = 0; i < 7; i += 1) {
    listItems.push(<li key={`li-${i}`}><PortfolioTile /></li>)
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
