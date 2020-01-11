export type Comment = {
    id: string
    student_id: string
    message: string
    upvote_count?: number
}

interface CommentItemProps {
    comment: Comment
}

const CommentItem = ({ comment }: CommentItemProps) => {
    return (
        <p>{comment.message || "Placeholder comment"}</p>
    )
}

export default CommentItem