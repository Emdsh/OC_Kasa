import { useContext } from 'react'
import PropTypes from 'prop-types'

import { ListingsContext } from '../../API/Listings'

import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import Portfolio from '../../layouts/Portfolio'

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
