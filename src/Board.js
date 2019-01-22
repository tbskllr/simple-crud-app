import React, { Component } from "react";
import Comment from "./App.js";
import "./index.css";
import "./App.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ["This is a comment"]
    };
  }

  eachComment = (text, i) => {
    return (
      <Comment
        key={i}
        index={i}
        updateCommentText={this.updateComment}
        deleteFromBoard={this.removeComment}
      >
        {text}
      </Comment>
    );
  };

  add = text => {
    var arr = this.state.comments;
    arr.push(text);
    this.setState({ comments: arr });
  };

  removeComment = i => {
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({ comments: arr });
  };

  updateComment = (newText, i) => {
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({ comments: arr });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.add.bind(null, "New Text")}
          className="button-new"
        >
          New Comment
        </button>
        <div className="board">{this.state.comments.map(this.eachComment)}</div>
      </div>
    );
  }
}

export default Board;
