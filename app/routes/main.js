import Ember from 'ember';

export default Ember.Route.extend({
	
	model:function(){
		var user = this.store.peekAll('user');
		user = user.findBy('logged',true);
		return user;
		

	}
});
