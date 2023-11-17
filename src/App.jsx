import { useCatFacts } from './hooks/useCatFacts'
import './App.css'

const App = () => {
  const { fact, imageUrl } = useCatFacts()

  return (
    <main>
      <h1>Cats App</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${imageUrl}`}
            alt={`Image extracted using three words for ${fact}`}
          />
        )}
      </section>
    </main>
  )
}

export default App
