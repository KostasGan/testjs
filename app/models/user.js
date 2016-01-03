import DS from 'ember-data';

var user = DS.Model.extend({

username: DS.attr('string', {defaultValue:'kostas'}),
email: DS.attr('string'),
password: DS.attr('string'),
logged:DS.attr('boolean')
//login:DS.belongsTo('login'),
//register:DS.belongsTo('register')

});

export default user;
