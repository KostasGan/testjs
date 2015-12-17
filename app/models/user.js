import DS from 'ember-data';

var user = DS.Model.extend({

username: DS.attr('string', {defaultValue: "KostasG" }),
email: DS.attr('string', { defaultValue: "kostas@kostas.gr" }),
password: DS.attr('string',{defaultValue: "kostas" }),

something:function(){
	alert(this.get('email'));

}

});

export default user;
