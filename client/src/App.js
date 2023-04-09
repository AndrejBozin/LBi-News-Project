import React, {useEffect, useState} from 'react'
import List from './list'
import "./App.css";

function App(){
  const [xArticlesData, setXArticlesData] = useState([{}])
  const [authorOrTitleData, setAuthorOrTitleData] = useState([{}])
  const [keywordData, setKeywordData] = useState([{}])


  useEffect(() => {
    fetch("/fetchXArticles?x=5").then(
      response => response.json()
    ).then(
      data => {
        setXArticlesData(data)
      }
    )

    fetch("/searchByAuthorOrTitle?author=someone&title=something").then(
      response => response.json()
    ).then(
      data => {
        setAuthorOrTitleData(data)
      }
    )

    fetch("/searchByKeyword?keyword=findthis").then(
      response => response.json()
    ).then(
      data => {
        setKeywordData(data)
      }
    )

  }, [])
 
  return (
    <div>
      <List data={xArticlesData} title="Fetch 5 Articles"/>
      <List data={authorOrTitleData} title="Fetch Articles with Author/Title ..."/>
      <List data={keywordData} title="Fetch Articles with Keyword ..."/>
    </div> 
  )
}

export default App 