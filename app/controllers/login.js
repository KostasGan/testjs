import Ember from 'ember';

export default Ember.Controller.extend({	
	logged:false,
	actions:{
		check: function(){
			var user= this.store.peekRecord('user',1);

			//alert(this.get(username));

			if((this.get('email') === user.get("username")) && (this.get('pass') === user.get("password"))){
				user.set('id',0);
				this.transitionToRoute("main");
			}
			else{
				user.set('logged', true),
				console.log(user.logged),
				Ember.$('#error').fadeOut(1500);

			}
			
		}
	}
});
