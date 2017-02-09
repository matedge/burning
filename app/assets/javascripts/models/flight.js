var app = app || {};

 app.Flight = Backbone.Model.extend({
  //  idAttribute: "flightid",
   urlRoot: '/flights',
   defaults: {
     date: 'Undefined Date',
     origin: 'Unknown Origin',
     destination: 'Unknown Destination',
     plane_id: 2
   }
 });


app.flight = new app.Flight();
app.flight.fetch();
console.log(app.flight)
