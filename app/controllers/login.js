import Ember from 'ember';
import user from '../models/user';

export default Ember.Controller.extend({	
	logged:false,

	actions:{
		check: function(){
			
			//alert();

			if((this.get('email') === 'kostas') && (this.get('pass') === 'kostas')){
				this.transitionToRoute("main");
			}
			else{
				this.set('logged', true);
				Ember.$('#error').fadeOut(1500);

			}
			
		}
	}
});
