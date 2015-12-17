import Ember from 'ember';
import user from '../models/user';

export default Ember.Controller.extend({	
	logged:false,

	actions:{
		check: function(){

			if((this.email === 'kostas') && (this.pass === 'kostas')){
				//alert(this.user1.something);
				this.transitionToRoute("main");
			}
			else{
				
				//this.set('logged', true);
				//return this.logged;
			}
		}
	}
});
