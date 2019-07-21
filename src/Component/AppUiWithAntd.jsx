import React from "react";
import { Input, Button, List } from "antd";

const AppUIWithAntd = props => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input
          value={props.inputValue}
          placeholder={"todo info"}
          style={{ width: "300px", marginRight: "10px" }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleSubmit}>
          submit
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, idx) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(idx);
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
