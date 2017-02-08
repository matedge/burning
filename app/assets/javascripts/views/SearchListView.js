var app = app || {};

app.SearchListView = Backbone.View.extend({
  tagName: 'tr', // Backbone will create a <li/> for us
  events: {
    'click': 'showFlight'
  },
  showFlight: function () {
    app.router.navigate('flights/' + this.model.get('id'), true);
  },
  render: function () {
    var flightHTML = _.template( $('#searchListView').html() );
    this.$el.html( flightHTML(this.model.attributes) );
    console.log(this.model.attributes);
    this.$el.appendTo('#searchResults');
  }
});
