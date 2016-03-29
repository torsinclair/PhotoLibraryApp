var photoData = [
  {
      title: "Norway",
      caption: "Low tide at Olstinden by Douglas Stratton",
      image: "https://drscdn.500px.org/photo/81913125/m%3D2048/d6926aeb94599899fc9e76fce241ff94"
  },
  {
      title: "Maui",
      caption: "Makena Cove, Maui. Let's go to the beach!",
      image: "http://assets.fodors.com/destinations/4636/beach-makena-cove-south-shore-maui-maui-hawaii-usa_main.jpg"
  },
  {
      title: "Tufa",
      caption: "Tufa at Night by Romain Guy",
      image: "https://lh3.googleusercontent.com/-YifreVFp77c/UMoTI_wpC6I/AAAAAAAAMRw/6VACc_ubeaU/w2048-h1312/Tufa%2Bat%2BNight.jpg"
  },
  {
      title: "Lost Island",
      caption: "Lost Island, San Gregorio, by Romain Guy",
      image: "https://lh3.googleusercontent.com/-7WqXcxOUVVA/VW1ct0NIx1I/AAAAAAAAQKE/GUcb_c0UAzc/w1719-h1149-no/Lost%2BIsland.jpg"
  },
  {
      title: "Winter Scene",
      caption: "Winter is coming, somewhere",
      image: "http://buzzerg.com/wp-content/uploads/8589130444382-winter-landscape-wallpaper-hd.jpg"
  }
];

        var library = new Photos(photoData);
        var app = new AppModel({library: library});

        // build a view for the top level of the whole app
        var appView = new AppView({model: app});

        // // put the view onto the screen
        // $('body').append(appView.render());


