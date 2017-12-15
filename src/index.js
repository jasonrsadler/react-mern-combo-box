import React from 'react';
import ReactDOM from 'react-dom'
import CommentBox from './CommentBox';

ReactDOM.render(
    <CommentBox url='http://127.0.0.1:3001/api/comments' pollInterval={2000}/>,
    document.getElementById('root')
);