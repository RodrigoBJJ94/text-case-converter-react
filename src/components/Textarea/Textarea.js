import React from "react";
import "./Styles.css";

export default function Textarea({ text, setText }) {
  return (
    <div className="textAreaContainer">
      <textarea
        className="textArea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </textarea>
    </div>
  );
};
