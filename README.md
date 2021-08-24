# cypress-automation-framework
A repo for applying all the automation concepts and suggested practices learned so far using Cypress and TypeScript.

## Dev Notes

1. In cypress.json "chromeWebSecurity": false is set in that way because the web application is accessing a cross-origin frame, hence it blocks the browser.

2. Create cypress.env.json file at a root level of the project and add the password provided in the webpage.

## References:

* [Applitools - Applying OOP webinar](https://applitools.com/event/applying-object-oriented-programming-principles-to-test-automation-design)
* [Github - Cypress](https://github.com/filiphric/cypress-pro-test-talk)
* [Github - Add cypress custom command in TS](https://github.com/cypress-io/add-cypress-custom-command-in-typescript/blob/master/cypress/support/commands.ts)
* [Gitnation - Don’t Make These Testing Mistakes](https://portal.gitnation.org/contents/dont-make-these-testing-mistakes)
* [Google - JSON convention](https://google.github.io/styleguide/jsoncstyleguide.xml?showone=Property_Name_Format#Property_Name_Format)
* [YT - Starting with TypeScript in Cypress](https://www.youtube.com/watch?v=r6my4a14knE&t=1024s)
