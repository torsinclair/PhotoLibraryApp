var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td><%= title %></td>'),

  events: {
    'click': 'broadcastClick'
  },

  broadcastClick: function() {
    this.model.updateView();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
})