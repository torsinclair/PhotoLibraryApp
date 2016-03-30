var AppView = Backbone.View.extend({

  initialize: function() {
    this.listView = new ListView({collection: this.model.get('list')});
    
    
  },

  render: function() {
    return this.$el.append([
      this.listView.$el,
    ]);
  }
});

