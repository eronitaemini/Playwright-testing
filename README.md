This repository contains a set of Playwright tests developed as a homework assignment for a Software Testing and Analysis class. The tests are designed to validate various functionalities of the GeeksforGeeks website.

Setup:
Before running the tests, ensure you have the following prerequisites:
Node.js installed on your machine
Playwright installed as a dependency

To install Playwright, run the following command:
npm install playwright

Test Cases: 
**Title Verification Test**: This test verifies that the title of the GeeksforGeeks homepage contains the expected text.
**Search Bar Test**: This test checks the functionality of the search bar by searching for the term "Python" and ensuring the search results page loads.
**Dark Mode Button Test**: This test toggles the dark mode setting and verifies that the dark mode is enabled by checking the appropriate attribute.
**Link Navigation Test**: This test clicks on the "Machine Learning Tutorial" link and verifies that the browser navigates to the correct URL.
**Sign-in Test**: This test attempts to sign in with a test account and checks for the visibility of an error alert upon entering incorrect credentials

Running the tests: 
npx playwright test
npx playwright test --ui 
