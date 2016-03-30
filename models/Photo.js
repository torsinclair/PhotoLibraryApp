var Photo = Backbone.Model.extend({

  defaults: {
    title: '',
    caption: '',
    rating: '',
    orderCount: '',
    image: '/assets/Mountain.png'
  },

  view: function() {
    this.trigger('view', this); 
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }


});



