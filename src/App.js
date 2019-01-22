import React, { Component } from "react";
import "./App.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  edit = () => {
    this.setState({ editing: true });
  };

  remove = () => {
    this.props.deleteFromBoard(this.props.index);
  };

  save = () => {
    this.props.updateCommentText(this.refs.newText.value, this.props.index);
    this.setState({ editing: false });
  };

  renderForm() {
    return (
      <div className="commentContainer">
        <textarea
          autoFocus
          className="textArea"
          ref="newText"
          defaultValue={this.props.children}
        />
        <button onClick={this.save} className="button-save">
          Save
        </button>
      </div>
    );
  }

  renderNormal() {
    return (
      <div className="commentContainer">
        <div className="commentText">{this.props.children}</div>
        <button onClick={this.edit} className="button-edit">
          Edit
        </button>
        <button onClick={this.remove} className="button-remove">
          Remove
        </button>
      </div>
    );
  }

  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}

export default Comment;
