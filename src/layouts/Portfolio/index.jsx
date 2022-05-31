import { useContext } from 'react'
import PropTypes from 'prop-types'

import { ListingsContext } from '../../API/Listings'

import Loader from '../../components/Loader'
import Thumb from '../../components/Thumb'

function Portfolio() {
  const { listingsData: listings, isDataLoading: loader } =
    useContext(ListingsContext)

  const listItems = []
  if (listings.length >= 1) {
    listings.forEach((listing) =>
      listItems.push(
        <li key={listing.id}>
          <Thumb cover={listing.cover} title={listing.title} id={listing.id} />
        </li>
      )
    )
  }

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <main>
          <ul className="portfolio">{listItems}</ul>
        </main>
      )}
    </>
  )
}

Portfolio.propTypes = {
  listings: PropTypes.array,
  loader: PropTypes.bool
}

export default Portfolio
