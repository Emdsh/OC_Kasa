import { useEffect, useState, createContext } from 'react'

const { REACT_APP_API, REACT_APP_API_HOST } = process.env

function API() {
  const [listingsData, setListingsData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchListing() {
      try {
        setDataLoading(true)

        const response = await fetch(REACT_APP_API, {
          method: 'GET',
          headers: {
            Host: REACT_APP_API_HOST,
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
        })

        const listingsData = await response.json()
        setListingsData(listingsData)
      } catch (error) {
        console.error(error)
      } finally {
        setDataLoading(false)
      }
    }

    fetchListing()
  }, [])

  return { listingsData, isDataLoading }
}

export const ListingsContext = createContext()

export const ListingsProvider = ({ children }) => {
  const listingsAPI = API()

  return (
    <ListingsContext.Provider value={listingsAPI}>
      {children}
    </ListingsContext.Provider>
  )
}
