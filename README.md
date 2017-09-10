# Bankly
Banking for Kids

To install:
- Navigate to root folder and type npm install.
- Open Bankly.xcodeproj with Xcode and build.

# Project Structure

The project is structure in the following way.

Both iOS and Android will load from **App.js**.

Within the project, we have a App Directory with the following structure.

```
App ---
      |
      |
      assets <-- Images are stored here
          |
          Dashboard <-- Categorized by screen
          |
          MyMoney
      |
      |
      Components
              |
              |
              ActionComponents <-- All features post authentication
              |
              Dashboard.js <-- Main component used to navigate to ActionComponents
              |
              Header.js <-- Shared component
              |
              Login.js <-- Authenticating user
              |
              Signup.js <-- Sign up form for user
              |
              SplashScreen <-- Component that loads first
      |
      |
      mock <-- All mock data is store here
```

# Navigation
For navigation we are using https://reactnavigation.org/ which supports both Android and iOS. 

# Building

A common problem that exist is the app returns "Unhandler JS Expection". If that problems shows up,
please do the following:

```
watchman watch-del-all
rm -rf ./node_modules
npm cache clean
npm i
./node_modules/react-native/packager/packager.sh start --resetCache
```