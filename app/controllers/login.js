import Ember from 'ember';


export default Ember.Controller.extend({	
	logged:false,
	//user1: Ember.computed.reads('UserController.model'),
	actions:{
		check: function(){

			if((this.get('email') === 'kostas') && (this.get('pass') === 'kostas')){
				

				this.transitionToRoute("main");
			}
			else{
				this.set('logged', true);
				//return this.logged;
				
				this.transitionToRoute("login");

			}
		}
	}
});
