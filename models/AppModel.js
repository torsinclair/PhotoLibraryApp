var AppModel = Backbone.Model.extend({

  initialize: function(params) {

    this.set('currentPhoto', new Photo());
    this.set('photoQueue', new PhotoQueue());
  

  params.library.on('enqueue', function(photo) {
    this.get('photoQueue').add(photo);

    console.log(this.get('photoQueue'));
    
  }, this);

  }

})