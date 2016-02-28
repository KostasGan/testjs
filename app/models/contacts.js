import DS from 'ember-data';

export default DS.Model.extend({
	contactEmail: DS.attr('string'),
	contactMessage: DS.attr('string'),
	user:DS.belongsTo('user')
  
});
