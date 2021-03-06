import { useContext } from 'react'
import PropTypes from 'prop-types'

import { ListingsContext } from '../../../API/Listings'

import Dropdown from '../../../components/Dropdown'
import Host from '../../../components/Host'
import Loader from '../../../components/Loader'
import Rating from '../../../components/Rating'
import ListingTags from '../Tags'

function ListingDetails(props) {
  const { id } = props
  const { listingsData: listings, isDataLoading: loader } =
    useContext(ListingsContext)

  let details = {}
  if (listings.length >= 1) {
    listings.forEach((listing) => {
      if (listing.id === id.id) {
        details = listing
      }
    })
  }

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className="listing-details">
          <div className="listing-details__text">
            <h1 className="listing-details__title">{details?.title}</h1>
            <p className="listing-details__location">{details?.location}</p>
          </div>
          {details?.tags && <ListingTags tags={details.tags} />}
          {details?.rating && <Rating rate={parseInt(details.rating)} />}
          {details?.host && (
            <Host name={details.host.name} picture={details.host.picture} />
          )}
          <div className="listing-details__dropdowns">
            {details?.description && (
              <Dropdown title="Description" content={details.description} />
            )}
            {details?.equipments && (
              <Dropdown title="Équipements" content={details.equipments} />
            )}
          </div>
        </section>
      )}
    </>
  )
}

ListingDetails.propTypes = {
  id: PropTypes.object,
  listings: PropTypes.array,
  loader: PropTypes.bool
}

export default ListingDetails
