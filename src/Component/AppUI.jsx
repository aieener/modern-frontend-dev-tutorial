import React from "react";

const AppUI = props => {
  let todoItem = props.list.map((item, idx) => {
    return <li key={idx} onClick={() => props.handleItemDelete(idx)}>{item}</li>;
  });
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <input
          value={props.inputValue}
          placeholder={"todo info"}
          style={{ width: "300px", marginRight: "10px" }}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleSubmit}>submit</button>
      </div>
      <ul>
        {todoItem}
      </ul>
    </div>
  );
};

export default AppUI;
