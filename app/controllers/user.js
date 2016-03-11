import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		signout:function(){
			this.get('sessionUser').logoutUser(this.get('session.uid'));
			this.transitionToRoute('login');
		}
	}
});
