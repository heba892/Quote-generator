import React, { useEffect } from 'react'
import {useState } from 'react'
import './App.css'
const App = () => {
  const [Quotes, setQuotes] = useState('')

  const getQuotes = () => {
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum])
    })
  }

  useEffect(() => {
    getQuotes()
  }, []);
  return (
    <div className='App'>
    <div className="quote">
    <p>{Quotes.text}</p>
    <p>Author: {Quotes.author}</p>
    <div className="btnContainer">
    <button onClick={getQuotes} className="btn">Get Quote</button>
    <a href={`https://twitter.com/intent/tweet?text=${Quotes.text}`} target="_blank" className="btn">tweet</a>
    </div>
    </div>
    

      
    </div>
  )
}

export default App
