var photoData = [
  {
      title: "Norway-Lofoten",
      caption: "Fishing Village Lofoten",
      image: "http://www.lofoten.info/sites/l/lofoten.info/files/fbe615c576d00cb62fce97742998dec8.JPG"
  },
  {
      title: "Norway-Lofoten",
      caption: "View From Water",
      image: "http://www.lofoten-info.no/Aa-hamna/Cabins%20in%20A%201.jpg"
  },
  {
      title: "Norway-Lofoten",
      caption: "Winter",
      image: "https://www.norrona.com/Global/04_Norr%C3%B8na%20Magazine/Lofoten-%20a%20love%20story/lofoten%20a%20love%20story_normal-4.jpg"
  },
  {
      title: "Norway-Lofoten",
      caption: "Northern Lights",
      image: "https://res-4.cloudinary.com/simpleview/image/upload/v1/clients/norway/northern_lights_moskenes_lofoten_norway_2_1_bc7aac29-4a57-437c-b848-838f0a7f43ff.jpg"
  },
  {
      title: "Norway-Lofoten",
      caption: "View From Top",
      image: "http://www.68north.com/content/2013/12/lofoten-03-bunes-beach.jpg"
  }
];

var backDrop = [
{
      title: "",
      caption: "",
      image: "assets/Mountain.png"
}
];


        var list = new Photos(photoData);

        var app = new AppModel({list: list});

        var appView = new AppView({model: app});

        
        //var picView = new PicView({model: app})




