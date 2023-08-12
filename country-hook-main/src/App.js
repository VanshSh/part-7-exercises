import React, { useState } from 'react'
import { useCountry } from './hooks'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}
const Country = ({ country }) => {
  const [showErr, setShowErr] = useState(null)
  console.log('😇 L-18 in App.js=> ', country)
  if (country.error) {
    setShowErr(true)
  }
  return (
    <div>
      {/* <h3>{country[0]?.name}</h3>
      <div>capital {country[0]?.capital}</div>
      <div>population {country[0]?.population}</div>
      <img
        src={country[0]?.flag}
        height='100'
        alt={`flag of ${country[0]?.name}`}
      /> */}
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const { countryData } = useCountry(name)
  console.log('😇 L-37 in App.js=> ', countryData)
  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>
      {countryData ? <Country country={countryData} /> : ''}
    </div>
  )
}

export default App
