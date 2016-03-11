import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
    	if(Ember.isEmpty(Cookies.get('userID'))){
      		this.transitionTo('login');
    	}
  	}
	
});
