import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div>
                <h3>Autor komentara je {this.props.author}</h3>
                <h4>Komentar glasi: {this.props.children}</h4>
                <hr/>
            </div>
        );        
    }
}