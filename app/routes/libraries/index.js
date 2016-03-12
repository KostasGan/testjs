import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		var lib= this.store.peekAll('library');
		console.log('Libraries Data exist and get them from store');
		if(lib.get('length')>0){
			return lib;
		}	
		else{
			console.log('Get libraries data from server');
			return this.store.findAll('library');
		}
	},
	actions: {

    	deleteLibrary(library) {
      		let confirmation = confirm('Are you sure?');

      		if (confirmation) {
        		library.destroyRecord();
      		}
    	}
  	}

});
