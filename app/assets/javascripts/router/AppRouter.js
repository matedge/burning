var app = app || {};

 app.AppRouter = Backbone.Router.extend({
   routes: {
     '': 'index',
     'planes': 'viewPlane',
     'flights': 'viewFlight',
     'flights/:id': 'viewBook',
     'search': "viewSearch"

   },

   index: function () {
     console.log('main');
     var NewsearchView = new app.NewsearchView();
     NewsearchView.render();

   },

   viewPlane: function() {
     console.log('planes');
   },

   viewFlight: function() {
     console.log('flights');
   },

   viewBook: function() {
     console.log('flights/:id');
   },

   viewSearch: function() {
     console.log('search');
   }


 })
