var app = app || {};

app.PlaneListView = Backbone.View.extend({
  el: '#main',

  render: function(){
    var appTemplate = $('#appTemplate').html();
    this.$el.html(appTemplate)
  }

});
