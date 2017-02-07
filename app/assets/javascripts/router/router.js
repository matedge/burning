var app = app || {};

 app.Router = Backbone.Router.extend({
   routes: {
     '': 'airplanes',
     'airplanes': 'airplanes',
     'flights': 'flights',
     'flights/:id': 'flight'

   },

   airplanes: function() {
     console.log('airplanes');
   },

   flights: function() {
     console.log('flights');
   },

   flight: function(id) {
     console.log('flight');
   }
 })
