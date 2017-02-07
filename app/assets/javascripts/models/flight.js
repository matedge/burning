var app = app || {};

 app.Flight = Backbone.Model.extend({
   defaults: {
     date: 'Undefined Date',
     origin: 'Unknown Origin',
     destination: 'Unknown Destination',
   }
 });
