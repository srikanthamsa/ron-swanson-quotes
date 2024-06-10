import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} />
      <button onClick={fetchQuote}>New Quote</button>
      <button onClick={saveQuote}>Save Quote</button>
      <h2>Saved Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.map((savedQuote, index) => (
          <QuoteCard key={index} quote={savedQuote} />
        ))}
      </div>
    </div>
  );
};

export default App;
