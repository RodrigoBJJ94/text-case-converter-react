import React from "react";
import "./Styles.css";

export default function Buttons({ text, setText }) {

  const converterToUpperCase = () => {
    if (text !== undefined) {
      setText(text.toUpperCase());
    };
  };

  const converterToLowerCase = () => {
    if (text !== undefined) {
      setText(text.toLowerCase());
    };
  };

  const converterToTitleCase = () => {
    if (text !== undefined) {
      setText(text.split(" ")
        .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join(" "));
    };
  };

  const converterToSentenceCase = () => {
    if (text !== undefined) {
      let splitText = text.split("");
      let upper = splitText[0].toUpperCase();
      let sentenceCase = upper.concat(text.substring(1).toLowerCase());
      setText(sentenceCase);
    };
  };

  const converterToRandomCase = () => {
    if (text !== undefined) {
      setText(text.split("")
        .map(word => Math.round(Math.random())
          ? word.toUpperCase()
          : word.toLowerCase())
        .join(""));
    };
  };

  return (
    <div className="buttonsContainer">
      <button
        className="buttons"
        onClick={converterToUpperCase}>
        Upper Case
      </button>
      <button
        className="buttons"
        onClick={converterToLowerCase}>
        Lower Case
      </button>
      <button
        className="buttons"
        onClick={converterToTitleCase}>
        Title Case
      </button>
      <button
        className="buttons"
        onClick={converterToSentenceCase}>
        Sentence Case
      </button>
      <button
        className="buttons"
        onClick={converterToRandomCase}>
        Random Case
      </button>
    </div>
  );
};
