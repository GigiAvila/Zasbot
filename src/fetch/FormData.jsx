import { useState, useEffect } from 'react'

export const FetchContactData = () => {
  const [fetchData, setFetchData] = useState({ data: [] })

  useEffect(() => {
    fetchDataFromApi()
  }, [])

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        'https://zasbot-back.vercel.app/api/form/all-forms'
      )
      const result = await response.json()
      setFetchData(result)
      console.log(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const sendGmail = async (data) => {
    const url = 'https://zasbot-back.vercel.app/api/email/send-email'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Error in response: ' + response.statusText)
      }

      await response.json()
    } catch (error) {
      console.error('Error sending email:', error.message)
    }
  }

  const postNewForm = async (data) => {
    try {
      const response = await fetch(
        'https://zasbot-back.vercel.app/api/form/new-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Server error:', errorData)
        throw new Error(errorData.message)
      }

      await response.json()
      sendGmail(data)
      fetchDataFromApi()
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  return { fetchData, fetchDataFromApi, postNewForm }
}

export default FetchContactData
