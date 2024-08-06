# book-app

Welcome to myReads! This project respresents the culmination of my work in the Code Louisville program. For this project, I decided that I wanted to create an app that would allow users to create lists of books they plan to read, as well as query the Library of Congress database for additional materials. pstone project for Code Louisville

## Installation

Once you have cloned the repo to your machine, you will need to use Node package manager to install the necessary modules. Then, you can run the application with the command:

```bash
npm install
node index.js
```

## Getting Started with the App

The app itself is very simple. From the Homepage, you can get a brief idea of how to use the Book List feature and the Search feature.

### Book List

The Book List allows users to manually enter in Author and Book titles, along with an ISBN or call number. This part of the app uses Vanilla JS classes for the functionality. The list is stored in your local storage, so that means that the list will persist until you clear your cache.

### Search LOC

The LOC search tool uses the Library of Congress API to populate the results. I limited the API to only return items that have been digitized. One aspect of the API that presented difficulties is that the "books" endpoint returns all printed materials, which includes scans of woodcuts, pieces of legislation, and more. Since there are no standard response forms, you cannot count on each item including the same attributes. In the future, I would like to improve the search function by adding more ways for the user to craft more specific searchs, or to switch which collection they search.

## Inspiration

For this project, I decided that
I wanted to create an app that would allow users to create lists of
books they plan to read, as well as query the Library of Congress
database for additional materials. I was inspired to create this project by my past experience as a
research assistant and time in graduate school. When starting on a new
project, you often find yourself with a scrap of paper with a dozen or
so call numbers. Univserity libraries use the same cataloging system
as the Library of Congress (LOC), which means books are shelved
according to subject matter. What this means is that you often find
the most interesting titles on your subject without even meaning to!
This process of discovery in research is vital. To get started, click
"Search LOC" above and starting searching the stacks! And don't worry,
the search is restricted to digitaized materials only, so you don't
even have to go to the library to pull your first text.
