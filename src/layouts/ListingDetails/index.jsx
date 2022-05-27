import Host from '../../components/Host'
import Rating from '../../components/Rating'
import ListingTags from '../ListingTags'
import Dropdown from '../../components/Dropdown'

function ListingDetails() {
  return (
    <>
      <section className="listing-details">
        <div className="listing-details__text">
          <h1 className="listing-details__title">
            Cozy loft on the Canal Saint-Martin
          </h1>
          <p className="listing-details__location">Paris, Île-de-France</p>
        </div>
        <ListingTags tags={['Cozy', 'Canal', 'Paris 10']} />
        <Rating rate="3" />
        <Host name="Alexandre Dumas" />
        <div className="listing-details__dropdowns">
          <Dropdown
            title="Description"
            content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
          />
          <Dropdown
            title="Équipements"
            content={[
              'Climatisation',
              'Wi-Fi',
              'Cuisine',
              'Espace de travail',
              'Fer à repasser',
              'Sèche-cheveux',
              'Cintres',
            ]}
          />
        </div>
      </section>
    </>
  )
}

export default ListingDetails
