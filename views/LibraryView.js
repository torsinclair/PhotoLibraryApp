var LibraryView = Backbone.View.extend({

  el: '.list-area',


  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Photos</th>').append(
      this.collection.map(function(photo) {
        return new LibraryEntryView({model: photo}).render();
        })
      );
    }
});

