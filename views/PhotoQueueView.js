var PhotoQueueView = Backbone.View.extend({

  el: '.photo-area',

  initialize: function() {
    this.collection.on('add remove', function() {
      this.render();
    }, this);
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Image View</th>').append(
      this.collection.map(function(photo) {
        return new PhotoQueueEntryView({model: photo}).render();
      })
    );
  }
});
