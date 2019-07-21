import React, { Component } from "react";
import store from "../store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  initListAction,
  getToggleStyleAction
} from "../store/actionCreators";
import AppUI from "../Component/AppUI";
import AppUiWithAntd from "../Component/AppUIWithStyle";
import { Button } from "antd";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleStyle = this.handleToggleStyle.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    // usually do ajax call to fetch data from backend here,
    // In this tutorial, we use mock data instead
    const data = [
      "study webpack",
      "study babel",
      "study React",
      "study Redux",
    ];
    const action = initListAction(data);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(elem) {
    const action = getInputChangeAction(elem.target.value);
    store.dispatch(action);
  }

  handleSubmit() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleToggleStyle() {
    const action = getToggleStyleAction();
    store.dispatch(action);
  }

  render() {
    let ui = (
      <AppUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleItemDelete={this.handleItemDelete}
      />
    );
    if (this.state.withAntdStyle) {
      ui = (
        <AppUiWithAntd
          inputValue={this.state.inputValue}
          list={this.state.list}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleItemDelete={this.handleItemDelete}
        />
      );
    }

    const styleToggler = (
      <Button type="dashed" onClick={this.handleToggleStyle}>
        Toggle Style
      </Button>
    );

    return (
      <div>
        {styleToggler}
        <div style={{display : "flex", justifyContent: "center"}}>{ui}</div>
      </div>
    );
  }
}
