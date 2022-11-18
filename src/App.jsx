import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './db/db'
import colors from './db/colors'
import { useState } from 'react'

function App() {

  const getRandom = (array) => {
    const randomIndex = Math.floor(array.length * Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(quotes))
  const [color, setColor] = useState(getRandom(colors))

  const getNewValues = () => {
    const newQuote = getRandom(quotes)
    const newColor = getRandom(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObject = {
    backgroundColor: color
  }

  const colorObject = {
    color: color
  }

  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox quote={quote}
        getNewValues={getNewValues}
        backgroundObject={backgroundObject}
        colorObject={colorObject}
      />
    </div>
  )
}

export default App
