import React, { useState } from 'react'
import Drawer from "./drawer"
import CommentList from "./commentList"
import { Comment } from './commentItem'
import CommentForm from './forms/commentForm'
import { DecodedToken } from '../services/auth.service'

interface CommentListWrapperProps {
    open: boolean,
    requestId: string,
    comments: Comment[],
    user: DecodedToken,
    onHandleDrawer(): void
}

const CommentListWrapper = ({ comments, requestId, user, open, onHandleDrawer }: CommentListWrapperProps) => {
    return (
        <Drawer visible={open} onToggleDrawer={onHandleDrawer} height="95vh">
            <CommentList comments={comments} />
            <CommentForm user={user} requestId={requestId} />
        </Drawer>
    )
}

export default CommentListWrapper