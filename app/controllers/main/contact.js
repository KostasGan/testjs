import Ember from 'ember';

export default Ember.Controller.extend({

	isValidEmail: Ember.computed.notEmpty('contactMail'),
	
	isMessageMaxChars: Ember.computed.gte('contactMessage.length', 5),

	FormValidated: Ember.computed.and('isValidEmail','isMessageMaxChars'),

	isNotValid: Ember.computed.not('FormValidated'),

	EmailSent:false,

	actions:{
		SendEmail:function() {
			this.set("EmailSent",true);
		}
	}
});
