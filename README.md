# React - Apollo

## Getting started

- First make sure to have all packages installed for each part (`yarn` or `npm i` in /backend and in /react-app)
- To run the backend, simply `yarn start` (or `npm run start`) in /backend
- To run the frontend, `yarn start` in /react-app

- If you want to test graphQL queries without the need to use the frontend, simply go to http://localhost:4000/graphql

## Understanding the data

- First, take a look at the schema in /Backend/server/schema.js to grasp the relationship between entities.
  Once you do that, head to your browser where the frontend runs. On that page we want to diplay the beers from the lastest check ins, but the images are not displaying 🤔.
  To fix this, maybe take a look at /react-app/src/database/queries.js.

- What's more, I passed a prop to the LastBeers component telling I want to show 12 beers but only 6 are displayed 😔. Maybe check out CheckinsProvider?

## Enable the user to sign in

- Before we'll be able to register you as a new user, we'll make sure you can sign in. Using the username and password 'Anthony' should log you in... unless something is wrong in the Login component 🤭.

- This is good and all, but you'll notice that every refresh will log you out. Kind of a bummer after I went to the trouble of saving the user token in localStorage 😕. You'll have to fix things both on the frontend (look in App.jsx) and on the backend (find where the context is set).

## Enable the user to check in

- Well, it seems the main selling point of the app isn't really working... Try checking in on a beer, then check the logs of the backend. I think something is wrong with one of the resolvers...

## Enable the user to create a new account

- At this point, you should know where to look and what to do 😉.

## Enable your newly created user to unfollow me (😢)

- You'll notice that I pulled a "Tom from Myspace" on you and added myself to your friend list. Thankfully there's a handy unfollow button on my user profile page (fdfmqg16a9jk2ko0lr is my user ID if you need it). What happens when you click on it?

## Enable real-time feed of checkins

- Once you are able to check in on a beer, you'll notice that you need to refresh the page each time if you want to see new checkins. How about you fix that too? Hint: the subscribeToMore function has an option called updateQuery...
- Bonus: did you make sure that the new check ins you receive and that are added to your feed are from your friends only?
