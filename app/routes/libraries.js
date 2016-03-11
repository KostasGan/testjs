import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
    	if(Ember.isEmpty(Cookies.get('userID'))){
      		this.transitionTo('login');
    	}
  	},
  	actions:{
		signout:function(){
			this.get('sessionUser').logoutUser(this.get('session.uid'));
			this.transitionTo('login');
		}
	}
});
