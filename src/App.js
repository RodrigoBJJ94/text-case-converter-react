import React, { useState } from "react";
import Title from "./components/Title/Title";
import Text from "./components/Text/Text";
import Textarea from "./components/Textarea/Textarea";
import Buttons from "./components/Buttons/Buttons";
import "./Styles.css";

export default function App() {
  const [text, setText] = useState();

  return (
    <div className="mainContainer">
      <div className="container">
        <Title />
        <Text />
        <Textarea
          text={text}
          setText={setText}
        />
        <Buttons
          text={text}
          setText={setText}
        />
      </div>
    </div>
  );
};
