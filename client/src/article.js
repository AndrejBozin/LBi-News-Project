const Article = (props) => {
    const {title, description, content, url, image, publishedAt, source} = props.article;
    return (
      <div className="card">
        <div className="article_img">
            <img
            src={image}
            alt=":("
            />
        </div>

        <div className="article_info">
            <h1>{title}</h1>
            <p>
                {description}
            </p>
            <div className="row">
            {/* <div className="follow">
                <p>Followers</p>
                <h1>963</h1>
            </div>
            <div className="follower">
                <p>Following</p>
                <h1>224</h1>
            </div> */}
            <div className="btn">
                <a href={url}>Link</a>
            </div>
            </div>
        </div>

    </div>
    )
}

export default Article