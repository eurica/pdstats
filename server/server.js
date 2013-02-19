Meteor.methods({
  //TODO: right now there's no rate limiting.
  //Since this is a demo, I assume it's rarely running, if it was in production, I'd refresh on the server every 30 seconds 
  //(downside: it'll refresh even if no-one ever looks at the app)
  updateCurrentState: function() {
    return getCurrentState()
  }
});

Meteor.startup(function () {
  getCurrentState();
});

var getCurrentState = function() {
  var url = "https://"+subdomain+".pagerduty.com/api/v1/services"
  var h = Meteor.http.call("GET", url, {"headers": {"Authorization":"Token token="+auth_token}})
  console.log("Updating " + (new Date()).toLocaleString())
  if (h.content) {
    s = JSON.parse(h.content)
    srvs = s.services
    for (var i = 0; i < srvs.length; i++) {
      srv = srvs[i]
      srv.subdomain=subdomain;
      srv.srv_weeks_old = Math.max(Math.floor((Date.now() - new Date(srv.created_at)) / 7/86400000),1)
      srv.incidents_week = Math.floor(100*srv.incident_counts.total/srv.srv_weeks_old)/100
      if(srv.last_incident_timestamp) {
        srv.days_old = Math.floor((Date.now() - new Date(srv.last_incident_timestamp)) /86400000)
      } else {
        srv.days_old = "never"
      }

      //From docs: The Mongo upsert feature is not implemented.
      service = Services.findOne({id: srv["id"]})
      if(!service) {
        Services.insert(srv);
      } else {
        Services.update(service, srv);
      }
    }
  }

}