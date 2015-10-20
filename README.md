# Projectful

###Goal
This will be an interactive student project database. Students should be able to post their projects & view others projects. 
This project is open-source, and students are encouraged to jump in with ideas, bugs, or help build.

###Tasks
*  Projects should be listed by course, then by project.
*  There should be a Misc. folder for not course work, that students can display.
*  Students should be able to upload projects.

###Ideas
Add any possible feature ideas here.
*  like button
*  featured projects on the homepage.. after x number of likes, gets a flag and rotated into the featured projects
*  comments
*  Misc should have portfolios separated out
*  students should provide link, and screenshot. Should projects be loaded in an iframe?
*  GitHub OAuth for getting usernames for comments/liking/etc.


###Contributing
This project is built, and supported, by the Thinkful Open-source community comprised of staff and students. To contribute, you should let us know you want to help, and introduce yourself in the Slack community `#open-source` channel. 
This project will be built comprised of a Node API, a Mongo database, and the front-end will be JQuery. Students are encouraged to experiment with add on libraries for animation and slideshow features.  
If you have a bug/feature to report, submit it in an issue. If you would like to contribute to the code base, please make all pull requests to the preview branch.

###Workflow

Contributing to this open source application is different than working on your own repo. There are extra steps. Here is a step by step guide to get you setup.

1. On GitHub go to https://github.com/Thinkful-OpenSource/projectful (make sure you're signed in) and click on the fork button to clone the repo to your account.
2. Next clone the project to Nitrous or your computer with `git clone https://github.com/<YourUsername>/projectful`

When working on open-source projects, it's important that you keep your fork in sync with the master to make sure that you have all the latest changes from other contributors.  
In order to do so, you'll need to configure a new remote for your fork.  To do so, run this from your project directory:

```
git remote add upstream https://github.com/Thinkful-OpenSource/projectful.git
```

Now, all you have to do to sync your project with the data from the main repo (Get changes from other contributors) is run:

```
git pull upstream master
```

To save your changes run the following commands:

```
git pull upstream master
git add -A
git commit -m "Your commit message (please try to be descriptive, other team members will see this)"
git push origin master
```

Now if you are happy with your work and you would like to contribute it to the Thinkful repo:

1. Go to your repo on GitHub
2. Click on the green button with two circling arrows (the one that wasn't there before)
3. Make sure you are targeting the `preview` branch (The dropdown towards the top, on the left, should say base: preview)
4. Review your changes
5. Press the "Create Pull Request" button
6. Leave a title and description of your contribution
7. We will review your changes, if fixes are needed we will comment on the PR.  Once approved, we will merge your changes into the main repo

If you have any questions on the Git workflow, reach out in Slack, and someone will help get you started. 

####Environment Setup
As mentioned, this project is built with [Node](http://howtonode.org/how-to-install-nodejs) and [MongoDB](http://www.mongodb.org/downloads). 
Node can be installed locally, or to make things easier if you aren't working on the Node portions, you can use [c9](http://c9.io). You will find instructions for setting up Mongo on there with a quick Google search. 

In order to get the dependencies installed, you will need to run npm install, and wait for that stuff to load. 

#####To Setup In c9
Sign up for a free account. Once it's setup, create a new workspace. In the creation screen, you should see some fairly straight forward options, including an input to put the link to your forked branch of the GitHub repo. 
You will want to choose the Node option from the ones listed, then create the new box.
C9 may give you some boilerplate code instead of the project files. If this happens, delete all the files inside the main folder, and in the terminal, you can `git clone <link to your repo>`
To work in your project, you will need to `cd` into the new folder that git creates. 
You will need to run `npm install` to get all the packages installed, and then Node will be all setup.
In order to run mongo, follow [these instructions](https://docs.c9.io/docs/setting-up-mongodb). 
Now c9 is setup, and ready for you to hack away. 

More Instructions Coming Soon...

####Development
This will contain information on the API endpoints...

#####Sever
Coming Soon...

#####Client (User Facing)
Coming Soon...
