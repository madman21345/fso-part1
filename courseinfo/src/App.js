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
      <Part part={props.part[0]} exercises={props.exercises[0]} />
      <Part part={props.part[1]} exercises={props.exercises[1]} />
      <Part part={props.part[2]} exercises={props.exercises[2]} />
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
  const sum = props.exercises[0] + props.exercises[1] + props.exercises[2]
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
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const exercises = [exercises1,exercises2,exercises3];

  return (
    <div>
      <Header course={course} />
      <Content part={[part1,part2,part3]} exercises={exercises}/>
      <Total exercises={exercises} />
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