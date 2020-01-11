import CommentItem, { Comment } from "./commentItem"

interface CommentListProps {
    comments: Comment[],
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <div className="comment-list"> 
            {comments.map((comment) => {
                return (
                    <CommentItem comment={comment} />
                )
            })}
        </div>
    )
}

export default CommentList