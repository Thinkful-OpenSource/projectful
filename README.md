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


###Contributing
This project is built, and supported, by the Thinkful Open-source community comprised of staff and students. To contribute, you should let us know you want to help, and introduce yourself in the Slack community `#open-source` channel. The project is built on the MEAN stack and generated with a fullstack [generator](https://github.com/DaftMonk/generator-angular-fullstack). Using the generator features is optional, but available.

If you have a bug/feature to report, submit it in an issue. If you would like to contribute to the code base, please make all pull requests to the preview branch.

####Environment Setup
As mentioned, this project is built on the MEAN (MongoDB, Express, AngularJS, and NodeJS) stack.  In order to develop locally on your computer, you will need to have Node installed (http://howtonode.org/how-to-install-nodejs).  You will also need to download and install [MongoDB](http://www.mongodb.org/downloads). Once you have installed Node and MongoDB, then you can perform the following steps to install the project:

```
mkdir <folder_name> && cd $_
git clone git@github.com:<your_username>/projectful.git .
bower install & npm install
```

There are quite a bit of dependencies so it will take a bit to install.  Once installed, there are two steps that will need to be done in order to run the project.  In your terminal, you will need to run `mongod` which will start a new MongoDB server instance.  Now, in a new terminal window you can run `grunt serve` which will run through some start up tasks and when complete it should launch your default browser and load http://localhost:9000/.  As you are editing files, the Grunt watch task will detect file changes and run through it's tasks and reload the site for you.

Instructions and a link to the c9 box will be added here soon. Students should not have free reign in c9 until they speak with one of the main contributors.
