'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Projectful = new Module('projectful');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Projectful.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Projectful.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Projectful.menus.add({
    title: 'Projectful',
    link: 'projectful example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Projectful.aggregateAsset('css', 'projectful.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Projectful.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Projectful.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Projectful.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Projectful;
});
