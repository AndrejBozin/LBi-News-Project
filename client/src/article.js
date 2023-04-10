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
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="desc">
                <p>
                    {description}
                </p>
            </div>
            <div className="row">
            <div className="btn">
                <a rel="noreferrer" target='_blank' href={url}>Link</a>
            </div>
            </div>
        </div>

    </div>
    )
}

export default Article