import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h3>Facts de gatitos</h3>
      <button onClick={handleClick}>Next Random Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`}
          alt={`image extracted using the first three words for ${fact}`}
                     />}
      </section>
    </main>
  )
}
