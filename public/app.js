//var app = function(){
  // var person = {firstName:"John", lastName:"Doe", age:46};
//   var cats = [
//     {catName:"Boba",catFood: "Sock fluff",imgURL: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
//     {catName:"Barnady",catFood:"Tuna",imgURL:"http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"},
//     {catName:"Max",catFood:"Whiskas Temptations",imgURL:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
//     {catName:"Alison", catFood:"Fish and Chips", imgURL:"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}
//     ]
// }
//     var addCatsToLIst = function(){
//       var ul = document.createElement("ul");
//         ul.classList.add("cat");

//       for (var i = 0; i<cats.length; i++){

//       var li = document.createElement("li");
//         li.innerText = "Name: " + cats[i].catName;

//         var li = document.createElement("li");
//           li.innerText = "Food: " + cats[i].catFood;

//         var li = document.createElement("li");
//           li.innerText = "URL: " + cats[i].imgURL;

      
// };
// var ul = document.createElement("/ul");
// return list;
// }
// addCatsToList();
var app =function(){
var options = [
        set0 = ['Option 1','Option 2'],
        cat1 = ['Boba','Sock Fluff','<IMG SRC="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" '],
        cat2 =  ['Barnaby','Tuna','<IMG SRC="http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg" '],
        cat3 = ["Max","Whiskas Temptations",'<IMG SRC=http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"']
    ];

     // var options = [
     //    set0 = {catName:"Boba",catFood: "Sock fluff",imgURL: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
     //    // {catName:"Barnady",catFood:"Tuna",imgURL:"http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"},
     //    // {catName:"Max",catFood:"Whiskas Temptations",imgURL:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
     //    // {catName:"Alison", catFood:"Fish and Chips", imgURL:"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}
     //    ];


function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);

    }
    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('foo').appendChild(makeUL(options[1]));
document.getElementById('foo').appendChild(makeUL(options[2]));
document.getElementById('foo').appendChild(makeUL(options[3]));
document.getElementById('foo').appendChild(makeUL(options[4]));

// makeUL(options[1]);
// makeUL(options[2]);
// makeUL(options[3]);
// makeUL(options[4]);


};
  window.onload = app;

