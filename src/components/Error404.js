function Error404() {
  return (
    <main className="error">
      <div className="error__content">
        <h1 className="error__code">404</h1>
        <p className="error__description">Oups! La page que vous demandez n'existe pas.</p>
        <a href="./" className="error__link">Retourner sur la page d'accueil</a>
      </div>
    </main>
  )
}

export default Error404
