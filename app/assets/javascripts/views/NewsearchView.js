var app = app || {};

app.NewsearchView = Backbone.View.extend({
  el: '#main',

  render: function(){
    debugger
    this.$el.html( $('#newsearchView').html() );
  }



});
