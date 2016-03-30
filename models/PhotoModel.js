var PhotoModel = Backbone.Model.extend({

  defaults: {
    title: '',
    caption: '',
    image: '',
    visible: 'false'
  },

  clicked: function() {
  this.trigger('clicked', this); 
  },

});
