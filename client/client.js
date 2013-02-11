Template.intro.greeting = function () {
  return "Listing " + Services.find().count() + " services"
};

Template.intro.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    Meteor.call('updateCurrentState', function(error, result) {
      console.log(result);
      console.log(error);
    })
    if (typeof console !== 'undefined')
      console.log(this.Template);
  }
});

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
    }, 60000)
  
});
