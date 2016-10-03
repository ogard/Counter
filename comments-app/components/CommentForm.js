import React, { Component } from 'react';


export default class ComponentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 0, author: '', text: '' };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(element) {
        this.setState({ author: element.target.value });
    }
    handleTextChange(element) {
        this.setState({ text: element.target.value })
    }
    handleSubmit(element) {
        // element.prventDefault();
        let id = this.state.id;
        if (!this.state.text || !this.state.author) {
            alert('Niste uneli ispravan komentar');
            // this.setState({ author: '', text: '' });
            (!this.state.author) && this.authorInput.focus();
            (!this.state.text) && this.textInput.focus();
        } else {
            this.props.onCommentSubmit({ id: id, author: this.state.author, text: this.state.text });
            this.setState({ id: ++id, author: '', text: '' });
        }
    }
    render() {
        return (
             <div style={{display: 'flex'}}>
                <input
                    ref={node => this.authorInput = node}
                    type='text'
                    placeholder='Unesite vase ime'
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                {' '}
                <input 
                    ref={node => this.textInput = node}
                    type='text'
                    placeholder='Unesite vas komentar'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                {' '}
                <button onClick={this.handleSubmit}>OK</button>
            </div>
        );
    }
}