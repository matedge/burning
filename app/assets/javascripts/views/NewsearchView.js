var app = app || {};

app.NewsearchView = Backbone.View.extend({
  el: '#main',

  render: function(){
    this.$el.html( $('#newsearchView').html() );
  }



});
