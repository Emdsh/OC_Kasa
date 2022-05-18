import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Portfolio from './Portfolio'
import Error404 from './Error404'

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Banner page="main"/>
        <Portfolio />

        <div style={{height: '10px', background: '#000', margin: "20px 0"}}></div>

        <Header />
        <Error404 />
      </div>

      <Footer />
    </>
  )
}

export default App
