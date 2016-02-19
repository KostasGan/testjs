import Mirage/*, {faker} */ from 'ember-cli-mirage';


export default Mirage.Factory.extend({

	id:1,
	fullname: 'Kostas Gan',
	username: 'kostas',
	email: 'kostas@kostas.gr',
	password: 'kostas',
	logged: false
	
  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
});