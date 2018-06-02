# Project Overview

This is one of the Udacity FEND Nanodegree Project. This project is a web-based application that reads RSS feeds. 


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## Testing Environment

Jasmine is used to write a number of tests against a pre-existing application. The project has underlying business logic of the application as well as the event handling and DOM manipulation.


# Project Specifications

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

# How it works

- The web page loads the following 4 Feeds: "Udacity Blog", "CSS Tricks", "HTML Rocks" and "Linear Degression".
- The web page contains the functionality and as well the Jasmine tests. 
- The Functionality part gives you the possibility to switch between the above mentioned Feeds, each Feed displays 4 feed entries per default and a click on a feed entry opens the feed article.
- The Tests part shows the result of all the Jasmine tests.
- Running the tests successfully assures that the required functionality works as expected. 
- If the any of the tests fails the Jasmine throws up the errors as spec.

# Referred Links

[Udacity Discussion Forum](https://discussions.udacity.com/c/nd001-feed-reader-testing/feed-reader-testing-project)

# Test link

<<<<<<< HEAD
Open the Feed Reader Testing link below
[Live Demo](https://sravanthi-cb.github.io/Feed-Reader-Testing/)

# How to open the app

You can clone or download this git repository to your local machine. Locate to the repository folder and open index.html, you should be able to see the feeds load.

# How to host app locally

1. Clone or Download the repository to your project folder
2. Check if you have Node.js installed, run this command in your terminal: node -v
   - Please refer to [node.js](https://nodejs.org/en/) for futher details
3. To confirm that you have npm installed you can run this command in your terminal: npm -v 
   - Please refer to [npm](https://www.npmjs.com/get-npm)
4. Open terminal navigate to the project folder root cd project-folder-name
5. Install http-server in npm with command line  npm install http-server -g. 
  - Please refer for further details [http-server](https://www.npmjs.com/package/http-server)  
6. Start the server for this app using http-server
7. You can visit http://localhost:8080 to view your app running
8. You can stop the server using ctrl+c

=======
[Live Demo](https://sravanthi-cb.github.io/Feed-Reader-Testing/)
>>>>>>> b2cde85ce8e566956793c635ce9e534672f7e506

