import PostCardItem from "./postCardItem"

interface PostCardListProps {
    requests: Array<any>
}

const PostCardList: React.FC<PostCardListProps> = (props) => {
    console.log(props.requests)
    return (
        <div className="card-list"> 
            {props.requests.map((request) => {
                return <PostCardItem key={ request._id } request={ request } />
            })}
        </div>
    )
}

export default PostCardList