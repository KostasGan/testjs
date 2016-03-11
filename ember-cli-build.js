/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('bower_components/AdminLTE/bootstrap/css/bootstrap.min.css');

  app.import('bower_components/AdminLTE/dist/css/AdminLTE.min.css');
  // Date Picker
  app.import('bower_components/AdminLTE/plugins/datepicker/datepicker3.css');
  // Daterange picker
  app.import('bower_components/AdminLTE/plugins/daterangepicker/daterangepicker-bs3.css');
  // AdminLTE All Skins
  app.import('bower_components/AdminLTE/dist/css/skins/_all-skins.min.css');
  // AdminLTE Skin
  app.import('bower_components/AdminLTE/dist/css/skins/skin-black.min.css');
  // iCheck
  app.import('bower_components/AdminLTE/plugins/iCheck/flat/blue.css');

  // Bootstrap
  app.import('bower_components/AdminLTE/bootstrap/js/bootstrap.min.js');
  // Datepicker
  app.import('bower_components/AdminLTE/plugins/datepicker/bootstrap-datepicker.js');
  // iCheck
  app.import('bower_components/AdminLTE/plugins/iCheck/icheck.min.js');
  // Slimscroll
  app.import('bower_components/AdminLTE/plugins/slimScroll/jquery.slimscroll.min.js');
  // Bootstrap WYSIHTML5
  app.import('bower_components/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js');
  // js-cookie
  app.import('bower_components/js-cookie/src/js.cookie.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
