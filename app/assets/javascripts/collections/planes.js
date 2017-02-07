var app = app || {};
app.Flights = Backbone.Collection.extend({
  url: '/planes',
  model: app.Plane
});
