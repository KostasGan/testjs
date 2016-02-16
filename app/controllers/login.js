import Ember from 'ember';

export default Ember.Controller.extend({	
	wrongCren:false,

	actions:{
		check: function(){
			
			var user= this.get('model').findBy('username', this.get('email'));
			//alert(user);
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
