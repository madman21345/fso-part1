const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.part[1]} {props.exercises[1]}
      </p>
      <p>
        {props.part[2]} {props.exercises[2]}
      </p>
      <p>
        {props.part[3]} {props.exercises[3]}
      </p>
    </>
  )
}

const Total = (props) => {
  //console.log(props)
  return (
    <>
      <p>
      Number of exercises {props.exercises[1] + props.exercises[2] + props.exercises[3]}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const excercises = [exercises1,exercises2,exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1,part2,part3]} excercises={excercises}/>
      <Total excercises={excercises} />
    </div>
  )
}
  /*
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
*/
export default App