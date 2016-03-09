import Ember from 'ember';


export default Ember.Controller.extend({	
	wrongCren:false,
	
	actions:{
		check:function(){
      var email = this.get('email');
      var password = this.get('pass');
      
      this.get('session').open('firebase', {
          provider: 'password',
          email: email,
          password: password   
      }).then(()=>{

        this.set('wrongCren',false);
        var user = this.store.find('user', this.get('session.uid'));
        this.get('sessionUser').retrievedUser(user);
        this.transitionToRoute("main");

      }).catch((error)=>{

       	this.set('wrongCren',true);
       	this.set('errorMessage',error);
        console.log(error);
        Ember.$('#error').fadeOut(1500);

      });
    }
  }
	
});
