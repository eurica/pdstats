# PagerDuty Service Status Board in Meteor.js 

This is a simple application using the [Meteor.js Framework](http://meteor.com/) to display a status board of [PagerDuty](http://www.pagerduty.com) services  that automatically updates every 30 seconds.

As of February 2013 there's a demo at [pagerduty-status-demo.meteor.com](http://pagerduty-status-demo.meteor.com)

## Getting started

* Install [Meteor.js](http://meteor.com/)
* Get a [PagerDuty](http://www.pagerduty.com) account if you don't have one already
* Generate an API token
* Download pdstats.js
* update server/credentials.js to reflect your subdomain and API token
* Deploy

## Deploying

This was originally a hackday project, which means I built it from scratch to live demo in one day, so it's a little rough around the edges.  It's my first project using Meteor.js, so while it's probably possible to [bundle](http://docs.meteor.com/#meteorbundle) the app, I haven't done that yet.  Currently, I'm [deploying](http://docs.meteor.com/#deploying) to meteor's server:

    meteor deploy *choose-a-url*.meteor.com

As of version 0.5.6, I'd recommend using the [--password](http://docs.meteor.com/#meteordeploy) option when you deploy.

## Credits

Thanks to [PagerDuty](http://www.pagerduty.com) for giving me the day to write this, and the [examples](http://meteor.com/examples/leaderboard) were a great help.  Questions or angry letters can be sent to [dave@pagerduty.com](mailto:dave@pagerduty.com).  

That said: This program is distributed in the hope that it will be useful, but *WITHOUT ANY WARRANTY*; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  

More of my projects are available at [euri.ca](http://euri.ca), this one is at: [euri.ca/2013/meteor-js-sample-integration-with-pagerduty/](http://euri.ca/2013/meteor-js-sample-integration-with-pagerduty)

