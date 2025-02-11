import PropTypes from "prop-types";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Todo;
