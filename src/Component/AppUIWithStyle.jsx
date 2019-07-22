import React from "react";
import { Input, Button, List } from "antd";

const AppUIWithAntd = props => {
  const {
    handleInputChange,
    handleSubmit,
    handleItemDelete,
    inputValue,
    list
  } = props; // ES6 syntax

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input
          value={inputValue}
          placeholder={"todo info"}
          style={{ width: "300px", marginRight: "10px" }}
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={handleSubmit}>
          submit
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "300px" }}
        bordered
        dataSource={list}
        renderItem={(item, idx) => (
          <List.Item
            onClick={() => {
              handleItemDelete(idx);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default AppUIWithAntd;
