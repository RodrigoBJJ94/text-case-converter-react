import React, { useState } from 'react';
import Title from './components/Title/Title';
import Caption from './components/Caption/Caption';
import Textarea from './components/Textarea/Textarea';
import Buttons from './components/Buttons/Buttons';
import './Styles.css';

export default function App() {
  const [text, setText] = useState();

  return (
    <div className="div-app">
      <Title />
      <Caption />
      <Textarea text={text} setText={setText} />
      <Buttons text={text} setText={setText} />
    </div>
  );
};
