# Welcome to AppliTrak! Where you can keep track and stay organized in your job hunt.

![applitrak](https://user-images.githubusercontent.com/79222168/144671355-1c204c82-b9eb-44dd-b979-956546a1c45b.png)

## Link to Deployed Site

[AppliTrak](https://immense-eyrie-11789.herokuapp.com/login)

## Table of Contents

- [Motivation and Technologies](#motivation-and-technologies)
- [Functionality](#functionality)
- [Challenges](#challenges)
- [Future Development](#future-development)

## Motivation and Technologies

As a team, we aimed to create a web application where users who are on the job hunt and want to stay organized in their pursuit of employment. We wanted the users to be able to add jobs that they are interested in and pertinent information regarding those jobs. The user can keep track of all the jobs they are looking at and see a calendar with any important dates that are approaching. The design concept is simple, easy to navigate, and consistent across all pages.

### Technologies

- Handlebars
- CSS
- JavaScript
- Bootstrap
- Node.js
- Express
- mySQL
- Sequelize
- FullCalendar Library

## Functionality

- The landing page introduces the site, and has sign-in and register as new user cards for the user to login.
- The user is then led to a dashboard where the jobs they are interested in will be presented.
- The user can add a job with information such as job title, job description, and status.
- The job will be added to the dashboard where it can be deleted or can be clicked on to view it on its own page.
- Using the navbar, the user can navigate to a calendar.
- The calendar will allow the user to add events such as upcoming interviews.

## Challenges

- Finding a calendar library that would function in vanilla JavaScript.
- Routes and authentication.
- Navigation links (displaying for logged-in users).
- Merge conflicts.

## Future Development

- Adding a PUT and DELETE route for the events.
- Adding a modal when you click on an event showing detailed information.
- Add a date picker.
- More polished UI/mobile-friendly.
- Calendar on Dashboard.
- Introduction page for the site.