function Thumb(props) {
  const { image, title } = props;

  return (
    <a href="./titre-de-la-location">
      <article className="thumb">
        <figure className="thumb__content">
          <img src={image} alt="" className="thumb__image" />
          <figcaption className="thumb__caption">
            <h2 className="thumb__title">{title}</h2>
          </figcaption>
        </figure>
      </article>
    </a>
  );
}

export default Thumb;
