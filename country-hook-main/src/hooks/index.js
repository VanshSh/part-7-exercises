import { useEffect, useState } from 'react'

export const useCountry = (countryName) => {
  const [countryData, setCountryData] = useState(null)
  const URL = `https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`

  const fetchCountryData = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    setCountryData(data)
  }
  useEffect(() => {
    fetchCountryData(URL)
  }, [countryName])

  return {
    countryData,
  }
}
