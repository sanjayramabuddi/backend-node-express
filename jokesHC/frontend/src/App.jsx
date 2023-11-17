import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log(response);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  })

  return (
    <>
      <h1>kiddo</h1>
      <h2>Total Jokes: {jokes.length}</h2>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
