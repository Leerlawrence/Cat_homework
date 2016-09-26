var app = function(){
  // var person = {firstName:"John", lastName:"Doe", age:46};
  var cats = [
    {catName:"Boba",catFood: "Sock fluff",imgURL: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
    {catName:"Barnady",catFood:"Tuna",imgURL:"http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"},
    {catName:"Max",catFood:"Whiskas Temptations",imgURL:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
    {catName:"Alison", catFood:"Fish and Chips", imgURL:"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}
    ]

    var addCatsToLIst = function(){
      for (var i = 0; i<cats.length; i++){
      var ul = document.createElement("ul");
        ul.classList.add("cat");

      var li = document.createElement("li");
        li.innerText = "Name: " + cats[i].catName;

        var li = document.createElement("li");
          li.innerText = "Food: " + cats[i].catFood;

        var li = document.createElement("li");
          li.innerText = "URL: " + cats[i].imgURL;

          var ul = document.createElement("/ul");
};

  };

  window.onload = app;

