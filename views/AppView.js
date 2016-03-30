var AppView = Backbone.View.extend({

  initialize: function(params) {

    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.photoQueueView = new PhotoQueueView({collection: this.model.get('photoQueue')});

    
  },

  render: function() {
      return this.$el.html([
      this.libraryView.$el,
      this.photoQueueView.$el
      ]);
  }

});