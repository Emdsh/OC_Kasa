import Banner from '../../components/Banner'
import Portfolio from '../../layouts/Portfolio'

import { useContext } from 'react'
import { ListingsContext } from '../../API/Listings'
import Loader from '../../components/Loader'
import PropTypes from 'prop-types'

function Home() {
  const { isDataLoading: loader } = useContext(ListingsContext)
  
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Banner page="home" title="Chez vous, partout et ailleurs" />
          <Portfolio />
        </>
      )}
    </>
  )
}

Home.propTypes = {
  loader: PropTypes.bool
}

export default Home
