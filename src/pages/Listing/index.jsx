import Carousel from '../../components/Carousel'
import ListingDetails from '../../layouts/Listing/Details'

import { useParams } from 'react-router-dom'

import { useContext } from 'react'
import { ListingsContext } from '../../API/Listings'
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

export default Listing
