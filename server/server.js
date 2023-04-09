const express = require('express');
const app = express();

//Fetches'X' number of news articles
app.get("/fetchXArticles", (req, res) => {
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
})

//Finds a news article with a specific title or author
app.get("/searchByAuthorOrTitle", (req, res) => {
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
})

//Searches for news articles by keyword
app.get("/searchByKeyword", (req, res) => {
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
})

app.listen(5000, ()=>{console.log("Server started on port 5000")});



/*
{
  "totalArticles": 54904,
  "articles": [
    {
      "title": "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      "description": "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      "content": "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      "url": "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      "image": "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      "publishedAt": "2022-09-28T08:14:24Z",
      "source": {
        "name": "PhoneArena",
        "url": "https://www.phonearena.com"
      }
    }
  ]
}
*/