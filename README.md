## React app launch guidelines
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

The following features are implemented in the app

- Title bar with logo, that takes to home page
- Home page lists Artickes fetched from https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/ api
- Each item in contained in a card and displays thumbnail, Title, Time (how long ago) and excerpt
- There is a button at the end of the page that takes you to next page. (They are perfect as of now)
- When a card in clicked, it takes you to full article page. This page has to full content of the article along with Title and thumbnail

- I have used react-router-dom for adding multiple pages and linking in this project
- I have also used useState and useEffect to maintain all variables used to fetch and display data from Word press api

- I have learnt quite a few new things about React doing this project. I appreciate the effort that goes into evaluating it. 

Thanks