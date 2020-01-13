import TimeAgo from 'react-timeago'

import Avatar from "./avatar"

import { getFullName, calculateTimestampFromId } from "../utils/helper"

export type Comment = {
    _id: string
    student_id: {
        _id: string,
        first_name?: string,
        last_name?: string,
        profile_img?: string,
    }
    message: string,
    request_id: string,
    upvote_count?: number
}

interface CommentItemProps {
    comment: Comment
}

const CommentItem = ({ comment }: CommentItemProps) => {
    const { 
        student_id: { 
            first_name, 
            last_name, 
            profile_img 
        } 
    } = comment

    // Get date from epoch
    const timestamp = calculateTimestampFromId(comment._id)

    return (
        <div className="comment-item">
            <div className="comment-item__thumbnail">
                <Avatar image={profile_img} />
            </div>
            <div className="comment-item__content">
                <div className="comment-item__top">
                    <h4 className="comment-item__author">{getFullName(first_name, last_name)}</h4>
                    <span className="comment-item__timestamp">
                        <TimeAgo date={timestamp} live={false} />
                    </span>
                </div>
                <p>{comment.message || "Placeholder comment"}</p>
            </div>
        </div>
    )
}

export default CommentItem