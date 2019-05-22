import React from "react";

const AddButton = ({ addItem }) => {
  return (
    <>
      <button
        className="addButton"
        style={{
          padding: "10px",
          fontSize: "16px",
          margin: "10px",
          backgroundColor: "#0066FF",
          color: "#FFF",
          border: "2px solid #0066FF"
        }}
        type="submit"
        onClick={event => addItem(event)}
      >
        Add
      </button>
    </>
  );
};

export default AddButton;
