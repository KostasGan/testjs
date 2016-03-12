import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
    	return this.store.peekRecord('library', params.library_id);
  	},

 	actions: {
    	createLibrary(newLibrary) {
      		newLibrary.save().then(() => this.transitionTo('libraries'));
    	},

    	willTransition(transition) {
    		
      		let model = this.controller.get('model');

      		if (model.get('hasDirtyAttributes')) {
        		let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        		if (confirmation) {
          			model.rollbackAttributes();
       			} else {
          			transition.abort();
        		}
      		}
    	}
  	}	
});
