import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		signout:function(){
			var user= this.get('model');
			user.deleteRecord();
			user.save();
			this.transitionToRoute('login');
		}
	}
});
