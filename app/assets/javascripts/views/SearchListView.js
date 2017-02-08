var app = app || {};

app.SearchListView = Backbone.View.extend({
  tagName: 'tr', // Backbone will create a <li/> for us
  events: {
    'click': 'showFlight'
  },
  showFlight: function () {
    app.appRouter.navigate('flights/' + this.model.get('id'), true);
  },
  render: function () {
    var flightHTML = _.template( $('#searchListView').html() );
    this.$el.html( flightHTML(this.model.attributes) );
    console.log(this.model.attributes);
    this.$el.appendTo('#searchResults');
  }
});

// var app = app || {};
//
// app.SearchListView = Backbone.View.extend({
//   tagName: 'tr', // Backbone will create a <li/> for us
//   events: {
//     'click td#data-url': 'showFlight'
//   },
//   showFlight: function () {
//     var router = new app.AppRouter();
//
//     router.navigate('flights/' + this.model.get('id'), true);
//   },
//   render: function () {
//     var flightHTML = _.template( $('#searchListView').html() );
//     this.$el.html( flightHTML(this.model.attributes) );
//     this.$el.find('#flightsid').attr("data-url", this.model.get("id"));
//     console.log(this.model.attributes);
//     this.$el.appendTo('#searchResults');
//   }
// });
