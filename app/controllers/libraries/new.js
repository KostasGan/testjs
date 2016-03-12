import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		createLibrary(){
			var libProperties=this.getProperties('libname','libaddress','libphone');
			this.store.createRecord('library',{
				address: libProperties.libaddress,
				name: libProperties.libname,
				phone: libProperties.libphone
			}).save().then(()=>{ 
				this.transitionTo('libraries');
			}).catch((error)=>{
				console.log(error);
			});
		}
	}
});
