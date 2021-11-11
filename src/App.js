import React, { useState } from 'react';
import './Styles.css';

export default function App() {
  const [text, setText] = useState();

  const converterToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const converterToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const converterToTitleCase = () => {
    setText(text.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' '));
  };

  const converterToSentenceCase = () => {
    
  };

  const converterToToggleCase = () => {

  };

  return (
    <div className="div-app">
      <div className="div-main">
        <h1 className="title">Case Converter</h1>
        <h3 className="caption">Enter your text bellow for converter</h3>
        <textarea className="text" rows="14" cols="77" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      <div className="div-buttons">
        <button onClick={converterToUpperCase}>Upper Case</button>
        <button onClick={converterToLowerCase}>Lower Case</button>
        <button onClick={converterToTitleCase}>Title Case</button>
        <button onClick={converterToSentenceCase}>Sentence Case</button>
        <button onClick={converterToToggleCase}>Toggle Case</button>
      </div>
    </div>
  );
};
