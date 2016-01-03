export default function() {
 
 this.get('/', function() {
    return {
      data: [{
        type: 'user',
        id: 1,
        attributes: {
          username: 'Kostasg',
          email: 'kostas@kostas.gr',
          password: 'kostas',
          logged: false
        }
      }] 
    } 
  }); 
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
