import PostCardItem from "./postCardItem"

interface PostCardListProps {
    posts: Array<any>
}

const PostCardList: React.FC<PostCardListProps> = (props) => {
    return (
        <div className="card-list"> 
            {props.posts.map((post) => {
                return <PostCardItem key={ post._id } post={post} />
            })}
        </div>
    )
}

export default PostCardList