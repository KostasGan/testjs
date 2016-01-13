import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return this.store.peekRecord('user',1);
	}
});
