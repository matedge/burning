var app = app || {};

app.NewsearchView = Backbone.View.extend({
  el: '#main',
  events: {'click button':'searchFlights'},

  render: function(){
    this.$el.html( $('#newsearchView').html() );

  },

  searchFlights: function(){

    var $origin = $('#origin').val()
    var $destination = $('#destination').val()
    var view = this;
    this.collection.fetch().done(function(results){
      var searchResults = view.collection.where({origin:$origin,destination:$destination})
      console.log(searchResults);
      app.searchResults = searchResults
      //search results get the flight id out
      //search results get the flight id out
      view.$el.find('table').show();
      _(searchResults).each(function (p) {
        var searchList = new app.SearchListView({model: p});
        searchList.render();
      });

  // new search list view.  loop through like post
    })

  }





});
