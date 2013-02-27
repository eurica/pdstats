Template.all_services.services = function () {
  s = Services.find({}, {sort: {last_incident_timestamp: -1}});
  return s;
};

Meteor.startup(function () {
  Meteor.setInterval(function() {
    Meteor.call('updateCurrentState', function(error, result) {
      if(error) console.log(error);
    })
    }, 30000)
  
});
