# book-app

Welcome to myReads! This project represents the culmination of my work in the Code Louisville program. For this project, I decided that I wanted to create an app that would allow users to create lists of books they plan to read, as well as query the Library of Congress database for additional materials. capstone project for Code Louisville

## Installation

Once you have cloned the repo to your machine, you will need to use Node package manager to install the necessary modules. Then, you can run the application with the command:

```bash
npm install
node index.js
```

## Getting Started with the App

The app itself is very simple. From the Homepage, you can get a brief idea of how to use the Book List feature and the Search feature.

### Book List

The Book List allows users to manually enter in Author and Book titles, along with an ISBN or call number. This part of the app uses Vanilla JS classes for the functionality. The book class defines the book object and book methods. So, when a user enters their info and hits "Add Book", the app creates a new book object and stores it in the table below. The list is stored in your local storage, so that means that the list will persist until you clear your cache.

### Search LOC

The LOC search tool uses the Library of Congress API to populate the results. I limited the API to only return items that have been digitized. One aspect of the API that presented difficulties is that the "books" endpoint returns all printed materials, which includes scans of woodcuts, pieces of legislation, and more. Since there are no standard response forms, you cannot count on each item including the same attributes. I spent a while examining the JSON that the API returns in order to find some commonalities that would allow my app to function. In the future, I would like to improve the search function by adding more ways for the user to craft more specific searches, or to switch which collection they search.

### Design

For visual design, I decided to use the Bootstrap Swatches with a mix of my own style sheets. One aspect of my design I plan to improve on is to add the dark mode button from the About Me page to every page. In addition, I would like to add media queries to the Book Search API so that it displays horizontal roles of results on large screens, but keeps the column design for mobile.

## Inspiration

For this project, I decided that I wanted to create an app that would allow users to create lists of books they plan to read, as well as query the Library of Congress database for additional materials. I was inspired to create this project by my past experience as a research assistant and time in graduate school. When starting on a new project, you often find yourself with a scrap of paper with a dozen or so call numbers. University libraries use the same cataloging system as the Library of Congress (LOC), which means books are shelved according to subject matter. What this means is that you often find the most interesting titles on your subject without even meaning to! This process of discovery in research is vital. To get started, click "Search LOC" above and starting searching the stacks! And don't worry, the search is restricted to digitized materials only, so you don't even have to go to the library to pull your first text.

## Plans for Future Features and Improvements

### A Backend

As I continue to learn and expand my web development skills, I hope to keep building on this project. In particular, I am interested next in creating a backend database for the site in order to have user accounts. For this, I am planning to look into both MongoDB and postgreSQL. I think it would be helpful to experiment with both to get experience with non-relational and relational databases.

### More API Features

In addition to a backend, I am also interested in expanding the API search on the app. Currently, it only as one text field and searches against the title, author, and description of each listing. But, I would like to expand the user's ability to select the search endpoint, or to provide a more nuanced search.
