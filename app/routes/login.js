import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(){
		if(!Ember.isEmpty(Cookies.get('userID'))){
			this.transitionTo("main");
		}
	}
		

});
