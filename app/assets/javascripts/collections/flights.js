var app = app || {};
app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight
});

app.flights = new app.Flights()
