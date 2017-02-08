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

    this.collection.fetch().done(function(results){
    })
    var searchResults = this.collection.where({origin:$origin,destination:$destination})
  }



});
