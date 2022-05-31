import { useEffect, useState, createContext } from 'react'

function API() {
  const [listingData, setListingData] = useState({})

  useEffect(() => {
    async function fetchListing() {
      try {
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
        const listingData = await response.json()
        setListingData(listingData)
      } catch (error) {
        console.error(error)
      } 
      finally {
      }
    }

    fetchListing()
  }, [])

  console.log('API', listingData)
  return listingData
}

export const ListingsContext = createContext()

export const ListingsProvider = ({ children }) => {
  const listingData = API()

  return (
    <ListingsContext.Provider value={listingData}>
      {children}
    </ListingsContext.Provider>
  )
}
