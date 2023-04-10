const fs = require('fs'); //used for file I/O

const fetch = require("node-fetch"); //used to make requests

//used to run JS on server-side and set up endpoints
const express = require('express'); 
const app = express();

//GNews api key
const apikey = 'c9dbbd66a2b98e69e330c6a610cdd83f';

//Initialize cache
let cache = {}

//Read cache from cache.txt file, convert to JSON
fs.readFile('cache.txt', (err, inputD) => {
    if (err) throw err;
    
    cache = JSON.parse(inputD)
 })

//Fetches'X' number of news articles
app.get("/fetchXArticles", (req, res) => {
    const numArticles = req.query.numArticles //Get number of articles requested

    //Check to make sure number of articles is defined and within bounds
    if(!numArticles || numArticles < 1 || numArticles > 10)
        throw new Error('numArticles must be defined as a number between 1 & 10!')

    //Check if this request has already been made (Cached)
    if(cache.fetchXArticles[numArticles]){
        res.json(cache.fetchXArticles[numArticles])
        return 
    }

    //GNews URL with max articles defined
    const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=' + numArticles + '&apikey=' + apikey;

    //Make GNews request, update cache, and return response
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cache.fetchXArticles[numArticles] = data
            fs.writeFile('cache.txt', JSON.stringify(cache), (err) => {
                if (err) next(err);
                else{
                   console.log("The cache is updated with the given data")
                }
             })

            res.json(data)
        })
})

//Finds a news article with a specific title
app.get("/searchByTitle", (req, res) => {
    const title = req.query.title //Get title search string requested

    //Check if title is defined
    if(!title)
        throw new Error('title must be defined!')

    //Check if this request has already been made (Cached)
    if(cache.searchByTitle[title]){
        res.json(cache.searchByTitle[title])
        return 
    }

    //GNews URL for searching within article titles
    const url = 'https://gnews.io/api/v4/search?q=' + title + '&lang=en&country=us&in=title&apikey=' + apikey;

    //Make GNews request, update cache, and return response
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cache.searchByTitle[title] = data
            fs.writeFile('cache.txt', JSON.stringify(cache), (err) => {
                if (err) next(err);
                else{
                   console.log("The cache is updated with the given data")
                }
             })

            res.json(data)
        }) 
})

//Searches for news articles by keyword
app.get("/searchByKeyword", (req, res) => {
    const keyword = req.query.keyword //Get search keyword requested

    //Check if keyword is defined
    if(!keyword)
        throw new Error('keyword must be defined!')

    //Check if this request has already been made (Cached)
    if(cache.searchByKeyword[keyword]){
        res.json(cache.searchByKeyword[keyword])
        return 
    }

    //GNews URL for searching by keyword
    const url = 'https://gnews.io/api/v4/search?q=' + keyword + '&lang=en&country=us&apikey=' + apikey;

    //Make GNews request, update cache, and return response
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cache.searchByKeyword[keyword] = data
            fs.writeFile('cache.txt', JSON.stringify(cache), (err) => {
                if (err) next(err);
                else{
                   console.log("The cache is updated with the given data")
                }
             })

            res.json(data)
        }) 
})

//Start server on port 5000
app.listen(5000, ()=>{console.log("Server started on port 5000")});