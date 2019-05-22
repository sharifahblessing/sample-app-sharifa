const ADD = "ADD";
const CHANGE = "CHANGE";
const DELETE = "DELETE";
const SUBMIT = "SUBMIT";

let nextItem = 0;
export const addActionCreator = value => {
  return {
    type: ADD,
    value,
    id: nextItem++
  };
};

export const changeActionCreator = event => {
  return {
    type: CHANGE,
    value: event.target.value
  };
};

export const deleteActionCreator = id => {
  return {
    type: DELETE,
    id: id
  };
};

export const reduxFormAction = values => {
  return {
    type: SUBMIT,
    values
  };
};
