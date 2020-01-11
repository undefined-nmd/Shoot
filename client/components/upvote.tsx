import React, { useState } from 'react'
import Icon from "./icon"
import { RequestService, VoteService } from '../services'

export type Upvote = {
    _id: string,
    student_id: string
    request_id: string
}

interface UpvoteProps {
    requestId: string,
    userId: string,
    count: number,
    upvote: Upvote[],
    handleVote?(): void 
}

const Upvote = ({ count, upvote, requestId, userId }: UpvoteProps) => {
    const [voteCount, setVoteCount] = useState(count)
    const [vote, setVote] = useState(upvote.length)
    
    const updateVote = async () => {
        if(vote) {
            if(voteCount > 0) {
                await VoteService.deleteVote(upvote[0]._id).then(() => {
                    updateVoteCountOnDelete()
                })
                setVote(0)
            }
        } else {
            await VoteService.createVote({ student_id: userId, request_id: requestId }).then(() => {
                updateVoteCountOnAdd()
            })
            setVote(1)
        }
    }

    const updateVoteCountOnDelete = async () => {
        await RequestService.updateRequest(requestId, {
            upvote_count: voteCount - 1
        })
        setVoteCount(voteCount - 1)
    }

    const updateVoteCountOnAdd = async () => {
        await RequestService.updateRequest(requestId, {
            upvote_count: voteCount + 1
        })
        setVoteCount(voteCount + 1)
    }

    return (
        <React.Fragment>
            <span className="card__meta-number">{voteCount}</span>
            <Icon name="arrow-up" onClick={updateVote} className={vote ? 'is-voted' : ''}/>
        </React.Fragment>
    )
}

export default Upvote