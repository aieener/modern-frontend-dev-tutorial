import React from "react";

const AppUI = props => {
  const {
    list,
    handleItemDelete,
    inputValue,
    handleInputChange,
    handleSubmit
  } = props; // ES6 syntax

  const getTodoItems = () => {
    return list.map((item, idx) => {
      return (
        <li key={idx} onClick={() => handleItemDelete(idx)}>
          {item}
        </li>
      );
    });
  };

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <input
          value={inputValue}
          placeholder={"todo info"}
          style={{ width: "300px", marginRight: "10px" }}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <ul>{getTodoItems()}</ul>
    </div>
  );
};

export default AppUI;
