"use client";

import React from "react";

function Button({ backgroundColor, type = "button", color, text, onClick, className = "" }) {
  const myStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <button
      type={type}
      style={myStyle}
      onClick={onClick}
      className={`py-2.5 px-5 rounded-[10px] cursor-pointer text-center font-bold transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
