import React from "react";
import "./Styles.css";

export default function Buttons({ text, setText }) {
  const converterToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const converterToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const converterToTitleCase = () => {
    setText(text.split(" ").map(word =>
      word[0].toUpperCase() + word.substring(1).toLowerCase()).join(" "));
  };

  const converterToSentenceCase = () => {
    let splitText = text.split("");
    let upper = splitText[0].toUpperCase();
    let sentenceCase = upper.concat(text.substring(1).toLowerCase());
    setText(sentenceCase);
  };

  const converterToRandomCase = () => {
    setText(text.split("").map(word =>
      Math.round(Math.random()) ? word.toUpperCase() : word.toLowerCase()).join(""));
  };

  return (
    <div className="buttons-container">
      <button
        onClick={converterToUpperCase}>
        Upper Case
      </button>
      <button
        onClick={converterToLowerCase}>
        Lower Case</button>
      <button
        onClick={converterToTitleCase}>
        Title Case</button>
      <button
        onClick={converterToSentenceCase}>
        Sentence Case</button>
      <button
        onClick={converterToRandomCase}>
        Random Case</button>
    </div>
  );
};
