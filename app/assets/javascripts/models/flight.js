var app = app || {};

 app.Flight = Backbone.Model.extend({
  //  urlRoot: '/flights',
   defaults: {
     date: 'Undefined Date',
     origin: 'Unknown Origin',
     destination: 'Unknown Destination',
   }
 });


app.flight = new app.Flight();
