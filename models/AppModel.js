var AppModel = Backbone.Model.extend({

  initialize: function(params) {

    this.set('currentPhoto', new Photo());
    this.set('photoQueue', new PhotoQueue());
  

  params.library.on('enqueue', function(photo) {
    
    console.log(this.get('photoQueue'));

    this.get('photoQueue').add(photo);

    // if( this.attributes.photoQueue.length ){
    //   var photo = (this.attributes.photoQueue.models[0]);
    //   this.attributes.photoQueue.remove(photo);
    // }
    
  }, this);

  }

})