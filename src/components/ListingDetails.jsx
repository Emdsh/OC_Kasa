import Host from './Host'
import Rating from './Rating'
import ListingTags from './ListingTags'
import ListingTitle from './ListingTitle'
import Dropdown from './Dropdown'

function ListingDetails() {
  return(
    <>
      <section className='listing-details'>
        <ListingTitle />
        <ListingTags />
        <Rating />
        <Host />
        <div className='listing-details__dropdowns'>
          <Dropdown title="Description"
            content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>
          <Dropdown title="Équipements"
            content="Climatisation
            Wi-Fi
            Cuisine
            Espace de travail
            Fer à repasser
            Sèche-cheveux
            Cintres"/>
        </div>
      </section>
    </>
  )
}

export default ListingDetails