import Host from '../../components/Host'
import Rating from '../../components/Rating'
import ListingTags from '../ListingTags'
import Dropdown from '../../components/Dropdown'

import { useContext } from 'react'
import { ListingsContext } from '../../API'

function ListingDetails(props) {
  const { id } = props
  const listings = useContext(ListingsContext)

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
      <section className="listing-details">
        <div className="listing-details__text">
          <h1 className="listing-details__title">
            {details.title}
          </h1>
          <p className="listing-details__location">{details.location}</p>
        </div>
        <ListingTags tags={details.tags} />
        <Rating rate={details.rating} />
        <Host name={details.host.name} picture={details.host.picture} />
        <div className="listing-details__dropdowns">
          <Dropdown
            title="Description"
            content={details.description}
          />
          <Dropdown
            title="Équipements"
            content={details.equipments}
          />
        </div>
      </section>
    </>
  )
}

export default ListingDetails
