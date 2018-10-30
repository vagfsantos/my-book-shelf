# My Book Shelf
My book shelf is a project developed in a course. It's not realistic but it shows a little bit of myself handling React.

## the result
https://vagfsantos-mybookshelf.herokuapp.com/

***Note**: Routes isn't working well on heroku.*

## Install
Into order to install the project follow the steps. Make sure to have Node installed on your machine.

    npm install yarn -g
then

    yarn install
and run it locally

    yarn start

## What was used
- React - For rendering and state management
- React Router - For routing
- PubSub -  A library for publish and listen to custom events
- Bulma - A CSS framework
- 
## The structure
- App
	- Manages the main state and rrender routes properly
- Pages
	- Groups up the components and build a full page
- Enums
	- Holds the main key words for using in the application
- Services
	- Publish events and connects to server
- Utils
	- Groups up helper function to be used in the whole app
