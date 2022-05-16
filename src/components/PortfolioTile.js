function PortfolioTile(props) {

  const {image, title} = props;

  return (
    <a href="./titre-de-la-location">
      <article className="portfolio__tile">
        <figure className="portfolio__tile__content">
          <img src={image} alt="" className="portfolio__tile__image"/>
          <figcaption className="portfolio__tile__caption">
            <h2 className="portfolio__tile__title">{title}</h2>
          </figcaption>
        </figure>
      </article>
    </a>
  )
}

export default PortfolioTile
