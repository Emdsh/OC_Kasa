import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ListingsContext } from '../../API/Listings'

import Carousel from '../../components/Carousel'
import ListingDetails from '../../layouts/Listing/Details'
import Loader from '../../components/Loader'

function Listing() {
  let id = useParams()
  const { isDataLoading: loader } = useContext(ListingsContext)

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
  loader: PropTypes.bool
}

export default Listing
