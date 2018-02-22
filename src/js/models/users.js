define(['ojs/ojcore', 'js/models/user', 'ojs/ojmodel'], function(oj, UserModel){
  let UserCollection = oj.Collection.extend({
    url: 'http://localhost:5000/api/users',
    model: UserModel
  });
  
  return UserCollection;
});