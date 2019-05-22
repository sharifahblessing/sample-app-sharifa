import React from "react";
import InputField from "./InputField";
import AddButton from "./AddButton";

const form = ({ addOnList, inPutChange, inputText }) => {
  return (
    <div>
      <h2>This is our form</h2>
      <InputField inPutFieldChange={inPutChange} inputText={inputText} />
      <AddButton addItem={addOnList} />
      {/* remove button - Hakim */}
    </div>
  );
};

export default form;
