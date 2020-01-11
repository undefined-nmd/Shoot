import { CommentInput } from "../inputs"

const CommentForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <CommentInput />
        </form>
    )
}

export default CommentForm