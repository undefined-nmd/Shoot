import { useState, useEffect } from 'react' 
import CommentItem, { Comment } from "./commentItem"

interface CommentListProps {
    comments: Comment[],
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <div className="comment-list"> 
            {comments.map((comment) => {
                return (
                    <CommentItem key={comment._id} comment={comment} />
                )
            })}
        </div>
    )
}

export default CommentList