import { useEffect, useState } from 'react'
import axios from 'axios'
export const useCountry = (countryName) => {
  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
    if (!countryName) {
      return
    }
    fetch(
      `https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`
    )
      .then((response) => response.json())
      .then((responseData) => setCountryData(responseData))
  }, [countryName])

  if (!countryData) {
    return []
  }

  return { countryData }
}
