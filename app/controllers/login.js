import Ember from 'ember';

export default Ember.Controller.extend({	
	wrongCren:false,

	actions:{
		check: function(){
			
			var user= this.store.peekRecord('user',1);

			if((this.get('email') === user.get("username")) && (this.get('pass') === user.get("password"))){
				user.set('logged',true);
				this.set('wrongCren',false);
				this.transitionToRoute("main");
			}
			else{
				this.set('wrongCren',true);
				Ember.$('#error').fadeOut(1500);



			}
	
		}
	}
});
