var PhotoQueue = Photos.extend({

  initialize: function() {
    this.on('add', function() {

      if(this.length >= 1){

      console.log(this.at(0));
      console.log(this.length);


      

      }


      // check length
        // if > 1 (more than default image) dequeue
          // this.at(1).view()
      }),

    this.on('enqueue')

    this.on('dequeue', function(photo) {
      this.remove(photo);
    });
  }

});

