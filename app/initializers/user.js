import DS from 'ember-data';
import user from '../models/user';

export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  /*var user = DS.Model.extend({

	Username: DS.attr('string', {defaultValue:'KostasG'}),
	Email: DS.attr('string', {defaultValue:'kostas@kostas.gr'}),
	Password: DS.attr('string',{defaultValue:'kostas'}),

	});*/
application.register('models:user', user);
//application.inject('controllers', 'user', 'something:user');	
}

export default {
  name: 'user',
  initialize: initialize
};
