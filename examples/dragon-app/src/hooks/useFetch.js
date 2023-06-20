import { useState, useEffect } from "react"

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(() => setError(true))
  }, [url])

  return [data, setData, loading, error]
}

export default useFetch