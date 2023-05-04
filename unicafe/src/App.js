import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if(text === "positive"){
    return(
      <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
    )
  }
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ stats }) => {
  const {good, neutral, bad, total} = stats
  if(total === 0) {return <div>No feedback given yet</div>}
  const avg = (good - bad)/total
  const pos = good/total*100 
  
  return(
  <table>
    <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={total} />
      <StatisticLine text="average" value ={avg} />
      <StatisticLine text="positive" value ={pos} />
    </tbody>
  </table>
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
      <Statistics stats={stats} />


    </div>
  )
}

export default App