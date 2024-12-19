import React, { useState } from "react";
import { Picker } from "emoji-mart";
// import "emoji-mart/css/emoji-mart.css";

const EmojiPickerButton = () => {
  const [emoji, setEmoji] = useState("");

  const handleSelect = (emoji) => {
    setEmoji(emoji.native);
  };

  return (
    <div>
      <h1>Pick an Emoji!</h1>
      <Picker onSelect={handleSelect} />
      <p>You selected: {emoji}</p>
    </div>
  );
};

export default EmojiPickerButton;
