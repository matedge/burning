var app = app || {};

 app.AppRouter = Backbone.Router.extend({
   routes: {
     '': 'index',
     'planes': 'viewPlane',
     'flights': 'viewFlight',
     'flights/:flightid': 'viewFlightById',
     'search': "viewSearch",
     "*other": "defaultRoute"

   },

   index: function () {
     console.log('main');
     app.newsearchview = new app.NewsearchView({collection: app.flights});
     app.newsearchview.render();



   },

   viewPlane: function() {
     console.log('planes');
   },

   viewFlight: function() {
     console.log('flights');
     app.seatsview = new SeatsView({ el: "#container" });
     app.seatsview.render();
   },

   viewFlightById: function(flightid) {

     console.log('flights/:id');
     app.seatsview = new SeatsView({ el: "#container" , flightsid : flightid});
    //  app.seatsview.fetch();
     console.log(app.seatsview);
     app.seatsview.render();
   },

   viewSearch: function() {
     console.log('search');
   }


 })
$(document).ready(function() {
 var router = new app.AppRouter();
  // Backbone.history.start();
  var NavView = Backbone.View.extend({
    events: {
      "click": "onClick"
    },

    onClick: function(e){
      var $li = $(e.target);
      router.navigate($li.attr("data-url"), { trigger: true });
    }
  });

  var navView = new NavView({ el: "#nav" });
  });
