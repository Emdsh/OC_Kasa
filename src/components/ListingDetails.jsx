import Host from './Host'
import Rating from './Rating'
import ListingTags from './ListingTags'
import ListingTitle from './ListingTitle'

function ListingDetails() {
  return(
    <section className='listing-details'>
      <ListingTitle />
      <ListingTags />
      <Rating />
      <Host />
    </section>
  )
}

export default ListingDetails