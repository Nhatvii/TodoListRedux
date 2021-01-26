import React, { Component } from "react";
import { connect } from "react-redux";
import List from "../Components/List";
import * as action from "../redux/action/actions";
import "antd/dist/antd.css";
import Checkbox from "antd/lib/checkbox/Checkbox";
import "./TodoList.css";

class TodoList extends Component {
  addTask = (e) => {
    if (this.inputElement.value !== "") {
      var newItem = {
        text: this.inputElement.value,
        id: Date.now(),
        isDone: false,
      };
      this.props.addItem(newItem);
    }
    this.inputElement = "";
    e.preventDefault();
  };
  renderList = () =>
    this.props.todoList.map((list, index) => {
      return (
        <List
          key={index}
          text={list.text}
          id={list.id}
          isDone={list.isDone}
          onUpdate={this.props.updateItem}
          onDelete={this.props.deleteItem}
          setIsDone={this.props.handleIsDone}
        />
      );
    });
  renderListDone = () =>
    this.props.todoListDone.map((list, index) => {
      return (
        <List
          key={index}
          text={list.text}
          id={list.id}
          isDone={list.isDone}
          onUpdate={this.props.updateItem}
          onDelete={this.props.deleteItem}
          setIsDone={this.props.handleIsDone}
        />
      );
    });

  render() {
    return (
      <div>
        <div class="parent">
          <form onSubmit={this.addTask}>
            <div class="title-name">To do list</div>
            <div class="header-info">
              <div class="add-task">
                <input
                class="input-tag"
                  type="text"
                  ref={(a) => (this.inputElement = a)}
                  placeholder="Enter task"
                />
                <button class="button-tag" type="submit">Add Task</button>
              </div>
              <Checkbox onChange={this.props.handleFilter}>
                Filter done/not done
              </Checkbox>
            </div>
          </form>
          {!this.props.isFilter ? this.renderListDone() : this.renderList()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todoList: state.TodoListReducer.todoList,
    todoListDone: state.TodoListReducer.todoListDone,
    isFilter: state.TodoListReducer.isFilter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(action.addItem(item));
    },
    updateItem: (id, title) => {
      dispatch(action.updateItem(id, title));
    },
    deleteItem: (id) => {
      dispatch(action.deleteItem(id));
    },
    handleIsDone: (checked, id) => {
      dispatch(action.handleIsDone(checked, id));
    },
    handleFilter: () => {
      dispatch(action.handleFilter());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
