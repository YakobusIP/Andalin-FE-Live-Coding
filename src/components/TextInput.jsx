import React from "react";

function TextInput(props) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-white">{props.label}</label>
      <input
        placeholder={props.placeholder}
        className="border border-black px-4 py-2 w-full"
        type={props.type}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default TextInput;
