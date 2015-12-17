import Ember from 'ember';
import user from '../models/user';

//var User= this.store.createRecord('user');

export default Ember.Route.extend({
	email:null,
	pass:null,
	model:function(){
		//return this.store.('user');
	}

});
