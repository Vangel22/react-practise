import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   todos: this.props.todos,
    // };
  }

  // CRUD functionality later...

  render() {
    return (
      <>
        <h1>Todos</h1>
        {this.props.todos.map((todo) => (
          <Todo {...todo} />
        ))}
      </>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
