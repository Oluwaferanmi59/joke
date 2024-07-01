import "./App.css";
import Joke from "./Joke";
import JokeForm from "./JokeForm";
import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState([
    {
      id: 1,
      text: "Why did the egg have a day off? Because it was Fryday.",
    },
    {
      id: 2,
      text: "I made song about tortilla once, now it's more like a wrap.",
    },
    {
      id: 3,
      text: "I stayed up all night wondering where the sun went, and then it dawned on me.",
    },
    {
      id: 4,
      text: "What do you do to have a space party? You planet.",
    },
  ])

  const handleAddJoke = (text) => {
    const joke = {
      text,
      id: self.crypto.randomUUID()
    }
    //joke.push(joke)
    setJokes([...jokes, joke])
    console.log("New Joke:", text)
  }

  const handleDeleteJoke = (id) =>{
    setJokes(jokes.filter(joke => joke.id !== id))
    console.log("Delete Joke", id)
  }
  return (
    <div>
      <h1>Dad Joke</h1>

      <JokeForm onAddJoke={handleAddJoke}/>

      {jokes.map((joke) => (
        <Joke onDelete={handleDeleteJoke} key={joke.id} id={joke.id} text={joke.text} />
      ))}

    </div>
  )
}

export default App
