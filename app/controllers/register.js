import Ember from 'ember';

export default Ember.Controller.extend({
		isSame:false,

		actions:{
		
			register:function(){

				if(this.get('pass') === this.get('confirm')){
					var newUser=this.store.createRecord('user',{
						id:'2',
						fullname: this.get('fullname'),
						username: this.get('username'),
						email: this.get('email'),
						password: this.get('pass'),
						logged: false
					})
					newUser.save();
					this.set('isSame',false);
					this.transitionToRoute("login");

				}
				else{
					this.set('isSame',true);
					Ember.$('#error').fadeOut(1500);
				}

			},			
		}

});
