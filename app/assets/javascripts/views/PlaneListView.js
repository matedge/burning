var app = app || {};

app.Reservation = Backbone.View.extend({
  el: '#main',

  render: function(){
    var origin = $('#origin').html();
    var destination = $('#destinaton').html();
    this.$el.html(appTemplate)
  }

});
