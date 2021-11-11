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
    let splitText = text.split('');
    let upper = splitText[0].toUpperCase();
    let sentenceCase = upper.concat(text.substring(1).toLowerCase())
    setText(sentenceCase);
  };

  const converterToRandomCase = () => {
    setText(text.split('').map(word => Math.round(Math.random()) ? word.toUpperCase() : word.toLowerCase()).join(''));
  };

  return (
    <div className="div-app">
      <h1 className="title">Case Converter</h1>
      <h3 className="caption">Enter your text bellow for converter</h3>
      <textarea className="text" rows="14" cols="69" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button onClick={converterToUpperCase}>Upper Case</button>
      <button onClick={converterToLowerCase}>Lower Case</button>
      <button onClick={converterToTitleCase}>Title Case</button>
      <button className="button-bottom" onClick={converterToSentenceCase}>Sentence Case</button>
      <button className="button-bottom" onClick={converterToRandomCase}>Random Case</button>
    </div>
  );
};
