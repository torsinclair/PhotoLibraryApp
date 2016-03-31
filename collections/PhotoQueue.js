var PhotoQueue = Photos.extend({

  initialize: function() {
    this.on('add', function() {});

    this.on('enqueue', function() {});

    this.on('dequeue', function(photo) {
      this.remove(photo);
    });
  }

});

