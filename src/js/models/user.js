define(['ojs/ojcore', 'ojs/ojmodel'], function(oj){
  UserModel =  oj.Model.extend({
    urlRoot: 'http://localhost:5000/api/users',
    idAttribute:'id'
  });
  
  return UserModel;
});