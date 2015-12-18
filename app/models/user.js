import DS from 'ember-data';

var user = DS.Model.extend({

username: DS.attr('string'),
email: DS.attr('string'),
password: DS.attr('string'),
login:DS.belongsTo('login')

});

export default user;
