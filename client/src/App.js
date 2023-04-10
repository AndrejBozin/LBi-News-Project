import React, {useEffect, useState} from 'react'
import List from './list'
import "./App.css";

function App(){
  const [xArticlesData, setXArticlesData] = useState([{}])
  const [titleData, setTitleData] = useState([{}])
  const [keywordData, setKeywordData] = useState([{}])


  useEffect(() => {
    fetch("/fetchXArticles?numArticles=3").then(
      response => response.json()
    ).then(
      data => {
        setXArticlesData(data)
      }
    )

    fetch("/searchByTitle?title=Layoff").then(
      response => response.json()
    ).then(
      data => {
        setTitleData(data)
      }
    )

    fetch("/searchByKeyword?keyword=Apple").then(
      response => response.json()
    ).then(
      data => {
        setKeywordData(data)
      }
    )

  }, [])
 
  return (
    <div>
      <List data={xArticlesData} title="Get 3 Articles"/>
      <List data={titleData} title="Get Articles w 'Layoff' in Title"/>
      <List data={keywordData} title="Get Articles w Keyword 'Apple'"/>
    </div> 
  )
}

export default App 