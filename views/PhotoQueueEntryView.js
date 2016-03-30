var PhotoQueueEntryView = Backbone.View.extend({

  template: _.template('<div><img src="<%= image %>"</td></div>\
    <div><%= caption %></div>\
    <div> <%= orderCount %> of <%= this.model.collection.models.length %></div>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes)); 
  }
});