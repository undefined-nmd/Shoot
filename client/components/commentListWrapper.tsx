import React, { useState } from 'react'
import Drawer from "./drawer"
import CommentList from "./commentList"
import CommentForm from './forms/commentForm'

interface CommentListWrapperProps {
    comments: any[]
}

const CommentListWrapper = ({ comments }: CommentListWrapperProps) => {
    const [showDrawer, setShowDrawer] = useState(true)

    const toggleDrawer = () => {
        console.log('Toggle Drawer')
    }

    return (
        <Drawer visible={showDrawer} onToggleDrawer={() => console.log('Toggle')} height="90vh">
            <CommentList comments={comments} />
            <CommentForm />
        </Drawer>
    )
}

export default CommentListWrapper