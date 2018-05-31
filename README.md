This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
This is a resubmission for the Redux Project for Udacity's React Nanodegree. The aim is to test state management and react fundamental skills.
  - The app is based on the game 'Would You Rather' - the user is given 2 options and must choose an option from the 2.
  - The user can add questions at /add and view their stats at /leaderboard - the root is a login screen which requires the user to pick from the avatars; no pages will load unless this is already chosen.
  - Questions will load at /questions/:question_id and will feature all details on that page
  - To logout click 'logout' on the Nav bar which will reload the app - this will lose any submitted answers or polls but you can now change the set user

To start the app:
  - npm install
  - npm run start
  - the app will be available at localhost:3000
