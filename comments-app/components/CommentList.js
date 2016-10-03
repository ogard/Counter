import React from 'react';
import Comment from './Comment'

export default class CommentList extends React.Component {
    render() {
        const { podaciCommentList } = this.props;
        console.log(podaciCommentList);
        const podaciKomentari = podaciCommentList.map(element => {
            return (
                <Comment key={element.id} author={element.author}>
                    {element.text}
                </Comment>
            )
        })
        return (
            <div>
                {podaciKomentari}
            </div>
        )
    }
}