# Travel_Hub

## Overview

This project is a forum website, where users can make posts and leave comments on posts to share content and discuss about their travel destinations or any topic of interest with an online community.

The user is able to perform all four CRUD operations. The user can create a new post, read previous posts, update a post, and delete a post.

## Application Features

The following REQUIRED features are completed:

- [x] A create form that allows the user to create posts
    - Posts must contain a title, and optionally additional textual content and/or an image added as an external image URL
- [x] A home feed displaying previously created posts
    - By default, only the time created, title, and upvotes count for each post is shown on the posts feed
    - Clicking on a post shall direct the user to a new page for the selected post
- [] Users can sort posts by either their created time or upvotes count
- [X] Users can search for posts by title
- [x] A separate post page for each created post, where any additional information is shown, including content, image, and comments
- [x] Users can leave comments underneath a post on the post page
- [] Each post should have an upvote button on the post page. Each click increases its upvotes count by one
    - Users can upvote any post for any number of times, but not downvote
- [] A previously created post can be edited from its post page
- [] A previously created post can be deleted from its post page
- [ ] Upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them

## Project Demo

🌐 [See the project deployed here!]()

![usage of crewmates project in gif form](readme_demo.gif)

## Setup

### Dependencies

* [React](https://www.npmjs.com/package/react)
* [React-DOM](https://www.npmjs.com/package/react-dom)
* [React Router DOM](https://www.npmjs.com/package/react-router-dom) (v.6)
* [Supabase-JS](https://www.npmjs.com/package/@supabase/supabase-js)

---

### Install Dependencies

Before installing dependiencies, you will need `node` and `npm` installed globally on your machine by installing [NodeJS](https://nodejs.org/en/download/) onto your machine.

To install the dependencies, run:

```sh
npm install
```

### Run TravelHub

In the repo directory, run the following in your terminal:

```sh
npm run start
```

Visit the web application in the browser

```console
http://localhost:3000/
```

### Deploy TravelHub

To deploy this application on Netlify, run the following in the repo directory:

```sh
npm install
npm run build
```

Upload the generated `build` folder to Netlify at:

```html
https://app.netlify.com/drop
```

<br/>

## Notes



---

*Last Updated: April 2023*
