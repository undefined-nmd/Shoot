import Icon from '../icon'

const CommentInput = (props: any) => {
    return (
        <div className={`form-control comment-control ${props.error ? 'is-invalid' : ''}`}>
            <input type="text" placeholder="Add a comment" {...props} />
            <div className="input__icon" onClick={props.handleClick}>
                <div className="input__icon--comment">
                    <Icon name="paper-plane" />
                </div>
            </div>
        </div>
    )
}

export default CommentInput