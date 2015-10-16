# Projectful

###Goal
This will be an interactive student project database. Students should be able to post their projects & view others projects. This project is open-source, and students are encouraged to jump in with ideas, bugs, or help build.

###Tasks
*  Projects should be listed by course, then by project.
*  There should be a Misc. folder for not course work, that students can display.
*  Students should be able to upload projects.

###Ideas
Add any possible feature ideas here.
*  like button
*  featured projects on the homepage.. after x number of likes, gets a flag and rotated into the featured projects
*  comments
*  Misc should have portfolios seperated out
*  students should provide link, and screenshot. Should projects be loaded in an iframe?
*  GitHub OAuth for getting usernames for comments/liking/etc.


###Contributing
This project is built, and supported, by the Thinkful Open-source community comprised of staff and students. To contribute, you should let us know you want to help, and introduce yourself in the Slack community `#open-source` channel. The project is built on the MEAN stack and generated with a fullstack [generator](https://github.com/DaftMonk/generator-angular-fullstack). Using the generator features is optional, but available.

If you have a bug/feature to report, submit it in an issue. If you would like to contribute to the code base, please make all pull requests to the preview branch.

###Workflow

Contributing to this open source application is different than working on your own repo. There are extra steps. Here is a step by step guide to get you setup.

1. On GitHub go to https://github.com/Thinkful-OpenSource/projectful (make sure you're signed in) and click on the fork button to clone the repo to your account.
2. Next clone the project to Nitrous or your computer with `git clone https://github.com/<YourUsername>/projectful`

When working on open-source projects, it's important that you keep your fork in sync with the master to make sure that you have all the latest changes from other contributors.  In order to do so, you'll need to configure a new remote for your fork.  To do so, run this from your project directory:

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

####Environment Setup
As mentioned, this project is built on the MEAN (MongoDB, Express, AngularJS, and NodeJS) stack.  In order to develop locally on your computer, you will need to have [Node](http://howtonode.org/how-to-install-nodejs) installed .  You will also need to download and install [MongoDB](http://www.mongodb.org/downloads). There is one other prerequisite for this project, the project uses [Grunt](http://gruntjs.com/getting-started), so you will need to make sure you have the Grunt CLI installed.  If it's not installed, you can install it with `npm install -g grunt-cli` (Note: You may need to run as admin or sudo).  Once you have installed Grunt CLI, Node and MongoDB, then you can perform the following steps to install the project:

```
mkdir <folder_name> && cd $_
git clone git@github.com:<your_username>/projectful.git .
bower install & npm install
```

Skip the first two steps if you've already cloned the repo and run `bower install & npm install` from your project directory.

There are quite a bit of dependencies so it will take a bit to install.  Once installed, there are just a couple more steps that will need to be done in order to run the project.  It's common to not include local configuration files in revision control, so the first step is that we will need to create our local environment file.  An example file has been created for you, so you can copy that with the following:

```
cp server/config/local.env.js-example server/config/local.env.js
```
You will also need to have the Sass Ruby Gem installed. If you are on a Mac, run `gem install sass` and it should add that gem to your gem library. This is required to parse the Sass file when Grunt builds the project. 
Now, in your terminal, you will need to run `mongod` which will start a new MongoDB server instance.  Finally, in a new terminal window you can run `grunt serve` which will run through some start up tasks and when complete it should launch your default browser and load http://localhost:9000/.  As you are editing files, the Grunt watch task will detect file changes and run through it's tasks and reload the site for you.

Instructions and a link to the c9 box will be added here soon. Students should not have free reign in c9 until they speak with one of the main contributors.

####Development
Coming Soon...

#####Sever
The files for the sever live inside the `/server` folder.  To create a new endpoint, you can [install](https://github.com/DaftMonk/generator-angular-fullstack#usage) and use the Yeoman full-stack generator mentioned above.  Follow the [docs](https://github.com/DaftMonk/generator-angular-fullstack#endpoint) to create the endpoint.  Alternatively, you can create the endpoint by hand.  The endpoint should be created in `/server/api/<endpoint_name>` and have a specific file structure.  For example, to create a new endpoint for `courses` then you would create a new directory `/server/api/course` and it would have the following file structure:

```
index.js // This is where the routes are set up
course.controller.js // This is where the methods for the endpoint are set up
course.model.js // The Mongoose model for the database structure
course.socket.js // Sets up the socket for real time data
course.spec.js // Test file
```

For an example of how these files should look, please refer to `/server/api/thing`.  This is a default endpoint that was created when the generator was run.  It's been left in as a reference for future endpoints.

An important thing to note is that any time you change a file in the `server` folder it will tear down and restart the server automatically.  This means that if you were logged into the app you will have lost your session.  Also note, that when the server starts up there is a seed file in `/server/config/seed.js` which seeds the database for development.  This creates some test users and data, and will eventually be set up to seed other data as well so you won't have to create the entities manually.  This also means that when any change is made a server file, any entites that you've created in the app will be deleted and reseeded.

#####Client (User Facing)
Coming Soon...
