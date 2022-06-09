import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ListingsContext } from '../../API/Listings'

import Carousel from '../../components/Carousel'
import ListingDetails from '../../layouts/Listing/Details'
import Loader from '../../components/Loader'

import Error from '../Error'

function Listing() {
  const id = useParams()
  const { listingsData: listings, isDataLoading: loader } =
    useContext(ListingsContext)

  let idMatch = false
  if (listings.length >= 1) {
    listings.forEach((listing) => {
      if (listing.id === id.id) {
        idMatch = true
      }
    })
  }

  if (!idMatch) return <Error />

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Carousel id={id} />
          <main>
            <ListingDetails id={id} />
          </main>{' '}
        </>
      )}
    </>
  )
}

Listing.propTypes = {
  id: PropTypes.string,
  loader: PropTypes.bool,
}

export default Listing
