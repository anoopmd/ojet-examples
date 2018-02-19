define(['ojs/ojcore', 'js/models/user', 'ojs/ojmodel'], function(oj, UserModel){
  let UserCollection = oj.Collection.extend({
    url: 'http://localhost:5000/api/users',
    model: UserModel,
    parse: function(data) {
      // console.log(data);
      return data[1, 2, 3];
    }
  });
  
  return UserCollection;
});