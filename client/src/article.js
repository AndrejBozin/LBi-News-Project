const Article = (props) => {
    const {title, description, content, url, image, publishedAt, source} = props.article;
    return (
        <div className="card">
      <div className="user_img">
        <img
          src="https://images.unsplash.com/flagged/photo-1559517207-2ad4420184d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
      </div>

      <div className="user_info">
        <h1>Jack Nelson</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="row">
          <div className="follow">
            <p>Followers</p>
            <h1>963</h1>
          </div>
          <div className="follower">
            <p>Following</p>
            <h1>224</h1>
          </div>
          <div className="btn">
            <a href="">Follow</a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Article