import { useState } from "react";
import "./App.css";

function App() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState("");
  // const [punchline, setPunchline] = useState("");
  const fetchJoke = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJoke(`${data.setup}/n ${data.punchline}`);
      // setPunchline(`${data.punchline}  😂😂`);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch a joke. Please try again later.");
    }
  };
  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <button onClick={fetchJoke}>Next Joke</button>
      <p>
        {joke} <br />
      </p>
    </div>
  );
}

export default App;
