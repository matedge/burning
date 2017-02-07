var app = app || {};

 app.Flight = Backbone.Model.extend({
   defaults: {
     date: 'Undefined Date'
     origin: 'Unknown Origin',
     destination: 'Unknown Destination',
     // Not sure if we'd want a default ID?
   }
 });
