import Ember from 'ember';

export default Ember.Controller.extend({	
	logged:false,
	actions:{
		check: function(){
			var user= this.store.peekRecord('user',1);

			if((this.get('email') === user.get("username")) && (this.get('pass') === user.get("password"))){
				

				this.transitionToRoute("main");
			}
			else{
				user.set('logged', true);
				Ember.$('#error').fadeOut(1500);
			}	
		}
	}
});
