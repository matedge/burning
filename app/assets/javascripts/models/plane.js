var app = app || {};

app.Plane = Backbone.Model.extend({
  // idAttribute: "planeid",
  urlRoot: '/planes',
  defaults: {
    name: '',
    rows: 0,
    columns: 0
  }
});


app.plane = new app.Plane();
app.plane.fetch();
console.log(app.plane)
