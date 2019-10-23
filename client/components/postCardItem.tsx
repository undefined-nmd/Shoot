const PostCardItem = () => (
    <section className="card">
        <div className="post__author d-flex">
            <figure className="post__author-thumbnail">
                <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="Student thumbnail" />
            </figure>
            <div className="post__author-content">
                <h2 className="post__author-course">UX Prototype</h2>
                <span className="post__author-name">Mona Lisa</span>
            </div>
        </div>
        <div className="post__content">
            <p>How to use brush in Photoshop? How do I start Photoshop? I can't do anything at the moment..</p>
        </div>
        <div className="post__meta"></div>
    </section>
)

export default PostCardItem