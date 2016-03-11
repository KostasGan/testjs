import Ember from 'ember';

export default Ember.Service.extend({
	CurrentUser:null,
	retrievedUser:function(user){
		this.set('CurrentUser',user);	
	}
});
