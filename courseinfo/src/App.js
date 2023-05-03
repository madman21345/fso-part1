const Header = (props) => {
  //console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0].name} exercises={props.part[0].exercises} />
      <Part part={props.part[1].name} exercises={props.part[1].exercises} />
      <Part part={props.part[2].name} exercises={props.part[2].exercises} />
    </>
  )
}
/*
const Content = (props) => {
  const exercises = props.exercises;
  const part = props.part;
  //console.log(exercises[1]);
  return (
    <>
      <p>
        {part[0]} {exercises[0]}
      </p>
      <p>
        {part[1]} {exercises[1]}
      </p>
      <p>
        {part[2]} {exercises[2]}
      </p>
    </>
  )
}
*/

const Total = (props) => {
  //console.log(props)
  const sum = props.part[0].exercises + props.part[1].exercises + props.part[2].exercises
  return (
    <>
      <p>
      Number of exercises {sum}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part={[part1,part2,part3]} />
      <Total part={[part1,part2,part3]} />
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