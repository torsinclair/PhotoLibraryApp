var Photos = Backbone.Collection.extend({

  model: Photo,


  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }

});




