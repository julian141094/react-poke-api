import React from "react";

const Text = ({ text = `Sorry, no results found...` }) => {
  return (
    <div className="poke-list-text-message-container">
      <span className="poke-list-text-message">{text}</span>
    </div>
  );
};

export default Text;
