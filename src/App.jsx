import './App.css'
import { useState, useEffect } from 'react';
import { XLogo, ThreadsLogo } from "@phosphor-icons/react";


function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://quotes-api-self.vercel.app/quote')
      .then(response => response.json())
      .then(data => {
        setQuote(data.quote);
        setAuthor(data.author);
      })
      .catch(error => {
        alert("There was an error loading the Random Quote's data");
      });
  }

  return (
    <div id='quote-box'>
      <p id='text'>"{quote}"</p>
      <p id="author">— {author} —</p>
      <div>
        <button id="new-quote" onClick={fetchQuote}>New Quote</button>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><XLogo size={32} /></a>
        <a href="https://threads.net/?hl=en" target="_blank"><ThreadsLogo size={32} /></a>
      </div>
    </div>
  )
}

export default App
