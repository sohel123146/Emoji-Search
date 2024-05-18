import React from "react";

const EmojiItem = ({data}) => {
  return (
    <div>
      {data.map((emoji) => {
        return(
            <div className="card" key={emoji.title}>
            <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>{emoji.symbol} {emoji.title}</div>
          </div>
        )
      })}
    </div>
  );
};

export default EmojiItem;
