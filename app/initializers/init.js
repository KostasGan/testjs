export function initialize(container,application) {
  application.inject('route', 'sessionUser', 'service:retrieve');
  application.inject('controller', 'sessionUser', 'service:retrieve');
}

export default {
  name: 'init',
  
  initialize:initialize
};
