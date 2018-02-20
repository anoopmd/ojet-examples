define(['ojs/ojcore', 'ojs/ojmodel'], function(oj){
  UserModel =  oj.Model.extend({
    urlRoot: 'http://localhost:5000/api/users',
    idAttribute:'id',
    parse: function(data) {
      console.log(data);

      return {
        id: data.id,
        name: 'John Nash'
      };
    }
  });
  
  return UserModel;
});