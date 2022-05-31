import { useEffect, useState, createContext } from 'react'

function API() {
  const [listingsData, setListingsData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchListing() {
      try {
        setDataLoading(true)

        const response = await fetch(
          'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json',
          {
            method: 'GET',
            headers: {
              Host: 's3-eu-west-1.amazonaws.com',
              Accept: '*/*',
              'Content-Type': 'application/json',
            },
          }
        )

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
