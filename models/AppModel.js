var AppModel = Backbone.Model.extend({

  initialize: function(params) {

    this.set('photos', params.list.models);

    params.list.on('clicked', function(imageModel) {
    this.set('currentPhoto', imageModel);
    }, this);

    params.list.on('add', function(imageModel) {
       this.set('currentPhoto', imageModel);
    }, this);
  }

});

