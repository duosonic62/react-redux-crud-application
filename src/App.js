import React from 'react';
import PropTyps from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "NoName", age: 3 },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTyps.string,
  age: PropTyps.number.isRequired
}

export default App;