# Elevate Prototype Readme

This project uses Ionic 2, Angular 2, and TypeScript.

If you don't have TypeScript setup, I recommend downloading VS Code which has TypeScript configured out of the box.  However, you can totally use whatever text editor you like without issue.

Please read this readme file completely, especially the section at the bottom about git workflow.

**After you're done reading this page, take a look at IONIC-README.md**.  That's the default readme file that comes with the Ionic starter kit used for this prototype and will be very useful at describing the overall structure of the project.

## Dependencies

You must have npm installed, and ionic installed.

    npm install -g ionic cordova

Here's the documentation on installing Ionic: https://ionicframework.com/

Once it's installed, here's the main Ionic documentation. : https://ionicframework.com/docs/

You'll mostly care about UI components, but you might find the other sections useful too.

## Starting Development

Once Ionic is installed and the product is cloned locally on your computer, open a terminal and navigate to the app folder and run:

    ionic serve

After it's done processing it should open up a browser window with live reload enabled.  Keep ionic serve running.  Anytime you change the code and save it'll recompile and refresh the page (SCSS changes are injected w/o refreshing).

https://ionicframework.com/docs/components/

The most useful Ionic documentation page is the components page.  Take a look through it, from top to bottom, and see all the prebuilt components they have.  When you go to make pages you will generally use some prebuilt component and then modify the CSS as necessary.

### Creating New Pages

Create a new folder in the `pages` folder.  Then basically copy everything from the `pages/content` folder (it serves as a good starter), and edit accordingly.

You will also need to add the page to `app.modules.ts`, in the pages list (line 70).

## API Requests

If you get to a point in the app and you think, "If this wasn't a prototype, we would save this data, or send it to the server," please let me know!  Leave a comment in the area you'd expect to make the API request and put a message in Bitbucket.

If you're feeling adventurerous you can also try and add the mock API request, but for now it's probably simpler if I do it. :)

## Git Workflow / Submitting Work

For now, I want everyone working on their on Git branch.  We can move up to more advanced branching strategies later.  That means after you clone the repo from git, checkout a branch with your own name.  For example:

    git clone ...
    git checkout -b adam

When you have work ready for review, push up your branch. You can make a full blown pull request, or you can just let me know by commenting on the issue that it's ready in your branch.

    git push origin adam
    < log into bitbucket then make pull request or comment that it's ready >

Then I'll review your work.  Assuming there are no more changes, I'll merge it into master.  Every day when you start working merge the changes in master into your personal branch.

    git checkout master
    git pull origin master
    git checkout adam
    git merge master

You want to get in the habit of merging master into your personal branch every day.  This reduces the chance of merge conflicts and diverging code-bases (major pains in the ass).
