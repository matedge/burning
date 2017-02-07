var app = app || {};
app.Flights = Backbone.Collection.extend({
  url: '/search',
  model: app.Reservation
});
