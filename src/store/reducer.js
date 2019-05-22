const initialState = {
  listItems: [],
  item: ""
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        item: "",
        listItems: [...state.listItems, { text: action.value, id: action.id }]
      };
    case "CHANGE":
      return {
        ...state,
        item: action.value
      };
    case "DELETE":
      return {
        ...state,
        listItems: state.listItems.filter(item => {
          return item.id !== action.id;
        })
        // listItems: [action.filter !== action.id]
      };
    default:
      return state;
  }
};

export default Reducer;
