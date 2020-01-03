import RequestCardItem from "./requestCardItem"

interface RequestCardListProps {
    requests: Array<any>,
    comments: Array<any>
}

const RequestCardList: React.FC<RequestCardListProps> = (props) => {
    return (
        <div className="card-list"> 
            {props.requests.map((request) => {
                const filteredComments = props.comments.filter(comment => comment.request_id === request._id)
                return (
                    <RequestCardItem key={ request._id } request={ request } comments={ filteredComments } />
                )
            })}
        </div>
    )
}

export default RequestCardList