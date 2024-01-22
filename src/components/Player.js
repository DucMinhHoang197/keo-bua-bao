import React from "react";

function Player({ avatarUrl, name }) {
  return (
    <div className="user">
      <span>{name}</span>
      <img className="avatar" src="./avatar/user.jpeg" alt="Your code here" />
    </div>
  );
}

export default Player;
