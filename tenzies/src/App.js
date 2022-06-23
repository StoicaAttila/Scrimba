import React from "react";
import Die from './components/Die'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const diceElements = dice.map(die => <Die 
    value={die.value}
    isHeld={die.isHeld}
    key={die.id}
    holdDice={()=>holdDice(die.id)}
    />)
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(()=>{
    const allHeld = dice.every(die => die.isHeld )
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
  }

  }, [dice])



  function allNewDice(){
    let array = []
    for(let i = 0; i < 10; i++){
        array.push(generateDie())
    }
    return array
  }

  function rollDice(){
    if(!tenzies){
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : generateDie()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld } : die
    }))
  }

  function generateDie(){
    return {
      value: Math.floor(Math.random() * 6) + 1, 
      isHeld: false,
      id: nanoid()
    }
  }
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <div className="die-container">
        {diceElements}
      </div>
      <button onClick={rollDice}>{tenzies ? "START NEW GAME" : "ROLL DICE"}</button>
    </main>
  );
}

export default App;
