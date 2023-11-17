import { useEffect, useState } from 'react'

const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export const useCatFacts = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')
        setImageUrl(
          `${CAT_PREFIX_IMAGE_URL}${threeFirstWords}?fontSize=50&fontColor=white`
        )
      })

    // Fetch asincrono
    // async function getRandomFact() {
    //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //     const json = await res.json()
    //     setFact(json.fact)
    // }

    // getRandomFact()
  }, [])

  return {
    fact,
    imageUrl
  }
}
