import * as React from 'react'

import { UserContext } from './context'

import Drawer from "./drawer"
import CommentList from "./commentList"
import { Comment } from './commentItem'
import { CommentForm } from './forms'

interface CommentListWrapperProps {
    open: boolean,
    requestId: string,
    comments: Comment[]
    onHandleDrawer(): void
}

const CommentListWrapper = ({ comments, requestId, open, onHandleDrawer }: CommentListWrapperProps) => {
    return (
        <Drawer visible={open} onToggleDrawer={onHandleDrawer} height="95vh">
            <CommentList comments={comments} />
            <UserContext.Consumer>
                {user => <CommentForm user={user} requestId={requestId} />}
            </UserContext.Consumer>
        </Drawer>
    )
}

export default CommentListWrapper