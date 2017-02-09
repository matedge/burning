var app = app || {};
app.Reservations = Backbone.Collection.extend({
  url: '/search',
  model: app.Reservation
});

app.reservations = new app.Reservations()
