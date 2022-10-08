import React from 'react';
import './Styles.css';

export default function Textarea({ text, setText }) {
  return (
    <div className="text-area-container">
      <textarea
        className="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </textarea>
    </div>
  );
};
