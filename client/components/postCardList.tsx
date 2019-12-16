import PostCardItem from "./postCardItem"

const PostCardList = () => {
    /* Dummy Data for now */
    const dummyData = [
        {
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            body: "Nulla porttitor massa id neque aliquam. Integer eget aliquet nibh praesent tristique magna sit amet."
        },
        {
            body: "Cras fermentum odio eu feugiat pretium. Sagittis orci a scelerisque purus semper."
        },
        {
            body: "Maecenas accumsan lacus vel facilisis. Amet purus gravida quis blandit turpis cursus in."
        },
        {
            body: "Libero enim sed faucibus turpis in eu. Eget arcu dictum varius duis at consectetur lorem donec."
        },
    ]

    return (
        <div className="card-list"> 
            {dummyData.map((post) => {
                return <PostCardItem key={ post.body } content={ post.body } />
            })}
        </div>
    )
}

export default PostCardList