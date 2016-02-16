import DS from 'ember-data';

var user = DS.Model.extend({

fullname: DS.attr('string'),
username: DS.attr('string'),
email: DS.attr('string'),
password: DS.attr('string'),
logged: DS.attr('boolean')
//login:DS.belongsTo('login'),
//register:DS.belongsTo('register')

});

export default user;
