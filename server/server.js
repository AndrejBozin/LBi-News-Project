const fs = require('fs')
const express = require('express');
const app = express();

//todo
//comment everything
//documentation & pictures
//reset cache file 
//see if it works on other laptop


//const apikey = 'something';

const apikey = 'c9dbbd66a2b98e69e330c6a610cdd83f';

let cache = {}

//const stringCache = JSON.stringify(cache);

fs.readFile('cache.txt', (err, inputD) => {
    if (err) throw err;
    
    cache = JSON.parse(inputD)
 })

//Fetches'X' number of news articles
app.get("/fetchXArticles", (req, res) => {
    const numArticles = req.query.numArticles

    if(!numArticles || numArticles < 1 || numArticles > 10)
        throw new Error('numArticles must be defined as a number between 1 & 10!')

    if(cache.fetchXArticles[numArticles]){
        res.json(cache.fetchXArticles[numArticles])
        return 
    }

    const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=' + numArticles + '&apikey=' + apikey;

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
    const title = req.query.title

    if(!title)
        throw new Error('title must be defined!')

    if(cache.searchByTitle[title]){
        res.json(cache.searchByTitle[title])
        return 
    }

    const url = 'https://gnews.io/api/v4/search?q=' + title + '&lang=en&country=us&in=title&apikey=' + apikey;

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
    const keyword = req.query.keyword

    if(!keyword)
        throw new Error('keyword must be defined!')

    if(cache.searchByKeyword[keyword]){
        res.json(cache.searchByKeyword[keyword])
        return 
    }

    const url = 'https://gnews.io/api/v4/search?q=' + keyword + '&lang=en&country=us&apikey=' + apikey;

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

app.listen(5000, ()=>{console.log("Server started on port 5000")});



/*
    res.json({"articles": [
        {
            "title": "Pixel 7a leaks in new official-looking renders [Gallery]",
            "description": "A new leak of the Pixel 7a shows off Google's mid-ranger from all angles and with a slick new blue color variant too.",
            "content": "Google’s Pixel 7a is expected to arrive at Google I/O in just over a month, and now the phone has leaked in official-looking images.\nThe Pixel 7a isn’t a device that’s exactly shrouded in mystery, but it hasn’t shown up in many images thus far. MySma... [1530 chars]",
            "url": "https://9to5google.com/2023/04/09/pixel-7a-renders-official-look-leak/",
            "image": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/04/pixel-7a-onleak-8.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-04-09T16:11:44Z",
            "source": {
                "name": "9to5Google",
                "url": "https://9to5google.com"
            }
        },
        {
            "title": "Google is getting better at killing products",
            "description": "Google has a reputation of killing products, and while that's not stopping, the company is getting much better at it.",
            "content": "Google has an unfortunate reputation for killing products, and often it leads to an uproar from users. Sometimes, a dead Google product is just leading to a replacement, like the move from Google Play Music to YouTube Music. Other times, it’s a produ... [4591 chars]",
            "url": "https://9to5google.com/2023/04/09/google-is-getting-better-at-killing-products/",
            "image": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2020/10/google_nest_secure_1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-04-09T16:00:00Z",
            "source": {
                "name": "9to5Google",
                "url": "https://9to5google.com"
            }
        },
        {
            "title": "How to use Google Maps Live View features",
            "description": "Live View has come a long way in the past few years, adding new tricks like calibrating your location and getting directions in indoor locations like malls and airports.",
            "content": "Google Maps Live View uses augmented reality to help make walking directions more accessible and dynamic on both Android phones and iPhones. Once you know where to find it, Live View is relatively easy to use. But you may not know what features are a... [5536 chars]",
            "url": "https://www.androidcentral.com/apps-software/google-maps/how-to-use-google-maps-live-view-features",
            "image": "https://cdn.mos.cms.futurecdn.net/sfgj29zfyaTZUqfSBqSeVf-1200-80.jpeg",
            "publishedAt": "2023-04-09T15:45:52Z",
            "source": {
                "name": "Android Central",
                "url": "https://www.androidcentral.com"
            }
        }
    ]}) 
*/