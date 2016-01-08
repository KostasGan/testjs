import DS from 'ember-data';

var user = DS.Model.extend({

username: DS.attr('string', {defaultValue:'kostas'}),
email: DS.attr('string',{defaultValue:'kostas@kostas.gr'}),
password: DS.attr('string',{defaultValue:'kostas'}),
logged:DS.attr('boolean',{defaultValue:false})
//login:DS.belongsTo('login'),
//register:DS.belongsTo('register')

});

export default user;
