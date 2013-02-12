Template.all_services.services = function () {
  s= Services.find({}, {sort: {last_incident_timestamp: -1}});
  console.log(s);
  return s;
};

Meteor.startup(function () {
  Session.set("auth_token", "1z3ws9sjVx5skqg9ykHn");
  Session.set("subdomain", "pdt-dave");
  Meteor.setInterval(function() {
    Meteor.call('updateCurrentState', function(error, result) {
      if(error) console.log(error);
    })
    }, 30000)
  
});
