var app = app || {};

app.Plane = Backbone.Model.extend({
  urlRoot: '/planes',
  defaults: {
    name: '',
    rows: 0,
    columns: 0
  }
});
