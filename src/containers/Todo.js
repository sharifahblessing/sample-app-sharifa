import React, { Component } from "react";
import Form from "../components/Form";
import classes from "./container.css";
import List from "../components/List";
import { connect } from "react-redux";
import {
  addActionCreator,
  changeActionCreator,
  deleteActionCreator
} from "../store/actions";

class Todo extends Component {
  addButtonClicked = () => {
    this.props.addActionCreator(this.props.item);
  };

  deleteItemClicked = key => {
    this.props.deleteActionCreator(key);
  };

  inputChangeFunction = event => {
    this.props.changeActionCreator(event);
  };

  render() {
    return (
      <div className={classes.container}>
        <h1>OUR TODO LIST</h1>
        <Form
          addOnList={this.addButtonClicked}
          inPutChange={this.inputChangeFunction}
          inputText={this.props.item}
        />
        <List
          deleteItem={this.deleteItemClicked}
          items={this.props.listItems}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listItems: state.listItems,
    item: state.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addActionCreator: event => dispatch(addActionCreator(event)),
    changeActionCreator: event => dispatch(changeActionCreator(event)),
    deleteActionCreator: event => dispatch(deleteActionCreator(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
