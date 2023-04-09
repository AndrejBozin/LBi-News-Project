import React, {useEffect, useState} from 'react'
import Article from './article'
import "./App.css";

function App(){
  const [backendData, setBackendData] = useState([{}])
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
 
  return (
    <div>
      {(typeof backendData.articles === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.articles.map((article, i) => (
          <Article key={i} article={article}/>
        ))
      )}
    </div> 
  )
}

export default App 