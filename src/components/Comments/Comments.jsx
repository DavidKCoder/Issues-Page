import React, { useState, useEffect } from 'react'
import { getComments } from '../api/api'

const Comments = props => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(props.commentsURL).then(res => setComments(res.data))
    }, [props.commentsURL]);

    return (
        <div className="comments">
            <h3>Comments:</h3>
            {comments.map(comment => {
                return (
                    <React.Fragment key={comment.id}>
                        <div className="commentBody">
                            <span className="user">{comment.user.login}</span>
                            <ReactMarkdown
                                source={comment.body}
                                escapeHtml={true}
                                className="commentsMarkDown" />
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Comments;