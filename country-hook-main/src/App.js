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
  const countryObject = country[0]

  if (!country || !country[0]) {
    return <div>not found...</div>
  }

  if (country[0]?.error) {
    return <div>not found...</div>
  }

  return (
    <div>
      <h3>{countryObject?.name.common}</h3>
      <div>capital {countryObject?.capital}</div>
      <div>population {countryObject?.population}</div>
      <img
        src={countryObject?.flags.png}
        height='100'
        alt={`flag of ${countryObject?.name}`}
      />
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState()
  const { countryData } = useCountry(name)
  const arrayOfCountryData = [countryData]
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
      <Country country={arrayOfCountryData} />
    </div>
  )
}

export default App
