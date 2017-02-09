var app = app || {};


app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {
    seat_row: '',
    seat_col: '',
    user_id: '',
    flight_id: ''
  },
});

app.reservation = new app.Reservation();
app.reservation.fetch();
console.log(app.reservation)
