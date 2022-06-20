import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import data from './data'

function App() {
  const cards = data.map(item =>{
    return (
      <Main
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="container">
      <Navbar />
      {cards}
    </div>
  );
}

export default App
