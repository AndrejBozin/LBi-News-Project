import Article from "./article";

const List = (props) => {
    const {data, title} = props;
    return (
      <div className="list-object">
        <h2 className="list-title">{title}</h2>
        {(typeof data.articles === 'undefined') ? (
          <p>Loading...</p>
        ) : (
            data.articles.map((article, i) => (
            <Article key={i} article={article}/>
          ))
        )}
      </div> 
    )
}

export default List