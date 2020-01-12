import Icon from '../icon'

const CommentInput = (props) => {
    return (
        <div className="form-control comment-control">
            <input type="text" placeholder="Add a comment" onChange={() => console.log('Clicked')} {...props} />
            <div className="input__icon">
                <div onClick={() => console.log('Clicked')} className="input__icon--comment">
                    <Icon name="paper-plane" />
                </div>
            </div>
        </div>
    )
}

export default CommentInput