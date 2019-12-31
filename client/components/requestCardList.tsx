import RequestCardItem from "./requestCardItem"

interface RequestCardListProps {
    requests: Array<any>
}

const RequestCardList: React.FC<RequestCardListProps> = (props) => {
    console.log(props.requests)
    return (
        <div className="card-list"> 
            {props.requests.map((request) => {
                return <RequestCardItem key={ request._id } request={ request } />
            })}
        </div>
    )
}

export default RequestCardList