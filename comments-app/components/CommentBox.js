import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

var podaci = [
  {id: 0, author: 'Janko Markovic', text: 'Prvi komentar'},
  {id: 1, author: 'Petar Petrovic', text: 'Drugi komentar'},
  {id: 2, author: 'Rados Scepanovic', text: 'Treci komentar'}
];

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(obj) {
        this.setState({ data: [...this.state.data, obj] })
    }
  render() {
    return (
      <div>
        <h1>Postavljanje komentara</h1>
        <CommentList podaciCommentList={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
