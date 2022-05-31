import Host from '../../../components/Host'
import Rating from '../../../components/Rating'
import ListingTags from '../Tags'
import Dropdown from '../../../components/Dropdown'
import Loader from '../../../components/Loader'

import { useContext } from 'react'
import { ListingsContext } from '../../../API/Listings'

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
          {details?.rating && <Rating rate={details.rating} />}
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

export default ListingDetails
