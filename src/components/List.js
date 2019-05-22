import React from "react";

const List = ({ deleteItem, items }) => {
  return (
    <div className="todoList">
      <ul
        style={{ listStyle: "none", justifyContent: "center", width: "250px" }}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              color: "#333",
              backgroundColor: "rgba(255,255,255,.5)",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "5px",
              listStyle: "none",
              justifyContent: "space-between",
              width: "270px",
              marginLeft: "-40px"
            }}
          >
            {item.text}
            <button
              style={{
                color: "red",
                fontSize: "20px",
                backgroundColor: "white"
              }}
              onClick={() => deleteItem(item.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
