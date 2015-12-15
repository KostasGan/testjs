import DS from 'ember-data';

export default DS.Model.extend({
Username: DS.attr('string',{defaultValue:'KostasG'}),
Email: DS.attr('string',{defaultValue:'kostas'}),
Password: DS.attr('string',{defaultValue:'kostas'})
  
});
