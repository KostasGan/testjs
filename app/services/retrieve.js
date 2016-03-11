import Ember from 'ember';

export default Ember.Service.extend({
	CurrentUser:null,
	store:Ember.inject.service(),

	retrievedUser(userid){
		var user = this.get('store').find('user', userid);
		this.set('CurrentUser',user);
		Cookies.set('userID', userid);
		console.log("No Cookie exist! Retrieved data with login");	
	},

	logoutUser(userid){
		this.set('CurrentUser',null);
		Cookies.remove('userID',userid);
		console.log("Data and Cookies deleted with logout..Transition to login");
	},

	initializeFromCookie:function(){
		var userID= Cookies.get('userID');
		if(!!userID){
			var user = this.get('store').find('user', userID);
			this.set('CurrentUser',user);
			console.log('Cookies exist! Sessions data retrieved');	
		}
	}.on('init')
});
