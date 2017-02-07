var app = app || {};

$(document).ready(function() {
  app.appRouter = new app.AppRouter();
  Backbone.history.start();
});
