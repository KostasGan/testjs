import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		signout:function(){
			var user= this.get('model');
			user.set("logged",false);
			
			this.transitionToRoute('login');
		},

		madeLogin:function(){
			
			var loggedUser= this.get('model').findBy('logged', true);
			console.log(loggedUser);
			return loggedUser.get('logged');
		}
	}
});
