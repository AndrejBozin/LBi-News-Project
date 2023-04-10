# LBi-News-Project

## About
**Author:** Andrej Bozin

**External API:** [GNews API](https://gnews.io/)

**Technologies Used:**
- *Front-end:* ReactJS, NodeJS
- *Back-end:* ExpressJS, NodeJS

**How It Works:**
There is server-side code which provides 3 endpoints for fetching articles by different criteria: X number of articles, articles with a certain string in their title [GNews does not seem to have authors], & articles with a keyword occuring anywhere in their text.

In addition to a backend service, there is client-side code which makes a request of each of the 3 types and displays the responses as a list of article cards. 
- Image of frontend:
![Screenshot of frontend displaying 3 columns of article cards corresponding to 3 request types](/Frontend%20Screenshot.png)

***Caching*** has also been implemented on the server-side in order to speed up request-response times & limit the number of requests made to GNews.

## Instructions
1. Clone this repo to your local setup.
2. To start up the backend, `cd` into the `server` directory. Run `npm install`, then run `npm run dev`. This will start the server on `port 5000`.

If you want to make requests to the backend service directly simply make a request from your browser at `http://localhost:5000/` followed by the endpoint you'd like to test & the appropriate argument.

**Example:** `http://localhost:5000/fetchXArticles?numArticles=6`

3. To run the frontend, `cd` into the `client` directory. Run `npm install`, then run `npm start`. This will boot up a React application on `port 3000`. You should see the application open in your browser, similar to the image above.

## Documentation
This documentation pertains to the server-side portion of this project. Before attempting to make these requests, please read & follow the instructions above.

There are 3 endpoints you can make requests to:

**/fetchXArticles**

*Parameter:* numArticles [Required]

*Description:* Making a request to this endpoint will fetch an array of articles containing however many articles are specified in the arguement. This value must be at least 1 and no greater than 10 (due to GNews free plan limitations).


**/searchByTitle**

*Parameter:* title [Required]

*Description:* Making a request to this endpoint will fetch an array of articles which contain in their title the specified string argument.


**/searchByKeyword**

*Parameter:* keyword [Required]

*Description:* Making a request to this endpoint will fetch an array of articles which contain the specified string argument anywhere in the article. This includes title, description, or content.
