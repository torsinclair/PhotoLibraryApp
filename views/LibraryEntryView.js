var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td><%= title %></td>'),

  events: {
    'click': function() {

      var orderCountInstance = 1;

      this.model.set('orderCount', orderCountInstance);
      this.model.enqueue();

      orderCountInstance++;
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
})