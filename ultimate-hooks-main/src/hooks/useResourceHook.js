import { useState } from 'react'
import axios from 'axios'

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  const get = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setResources(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const create = (resource) => {
    axios
      .post(baseUrl, resource)
      .then((response) => {
        setResources([...resources, response.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const service = {
    create,
    get,
  }

  return [resources, service]
}
