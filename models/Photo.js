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

  updateView: function() {
    new PhotoView({model: this});
    //this.set('title', this.attributes.title);
    console.log(this.attributes.title);
    // console.log(this);
    // new RatingView({model: this});

    // this.trigger('updatePhotoView', this);

    // this.set('rating', this.get('rating'));

    // this.trigger('updateRating', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }


});



