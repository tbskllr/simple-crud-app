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

  remove() {
    alert("Removing comment");
  }

  save = () => {
    var val = this.refs.newText.value;
    console.log("New Comment: " + val);
    this.setState({ editing: false });
  };

  renderForm() {
    return (
      <div className="commentContainer">
        <textarea ref="newText" defaultValue={this.props.children} />
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
