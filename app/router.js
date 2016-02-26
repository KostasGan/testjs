import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path:'/'});
  this.route('main',function(){
    this.route('about');
    this.route('contact');
  });
  this.route('register');
  this.route('user',{ path:'/profile'});

  this.route('admin', function() {
    this.route('invitations');
  });
});



export default Router; 
