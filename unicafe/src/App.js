import { useState } from 'react'

const DisplayStats = ({ stats }) => {
  const {good, neutral, bad, total} = stats
  const avg = (good - bad)/total
  const pos = good/total*100
  
  return(
  <>
  <p>good {good}</p>
  <p>neutral {neutral}</p>
  <p>bad {bad}</p>
  <p>all {total}</p>
  <p>average {avg}</p>
  <p>positive {pos}%</p>
  </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const stats = {good: good, neutral: neutral, bad: bad, total: total}

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + neutral + good)
  }


  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGood} text={"good"}/>
      <Button handleClick={handleNeutral} text={"neutral"}/>
      <Button handleClick={handleBad} text={"bad"}/>

      <h1>statistics</h1>
      <DisplayStats stats={stats} />


    </div>
  )
}

export default App