import Carousel from '../../components/Carousel'
import ListingDetails from '../../layouts/ListingDetails'

import { useParams } from 'react-router-dom'

function Listing() {
  let id = useParams()

  return (
    <>
      <Carousel id={id}/>
      <main>
        <ListingDetails  id={id}/>
      </main>
    </>
  )
}

export default Listing
