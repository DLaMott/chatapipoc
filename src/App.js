// Create a react app, input TXT, fetch chatapi, display message below

import React, {useState} from "react";
import './App.css';

function App(){

  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    .then((res) => res.json())
    .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <h1>OpenApi Chat App</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder="Ask Away"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    {response && <div><b>ChatBot:</b>{response}</div>}
    </div>
  );

}

export default App;
