import React from "react";

const inputFeild = ({ inPutFieldChange, inputText, removeText }) => {
  return (
    <input
      className="inputFeild"
      style={{
        padding: "10px",
        fontSize: "16px",
        border: "2px solid #FFF",
        width: "165px"
      }}
      placeholder="Enter Task"
      value={inputText}
      onChange={event => inPutFieldChange(event)}
    />
  );
};

export default inputFeild;
