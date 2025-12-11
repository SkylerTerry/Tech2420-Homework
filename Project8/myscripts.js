// JavaScript Document/* ========= PRELOADS FOR ROLLOVERS ========= */
var Print1 = new Image();
var Print2 = new Image();
var logo1  = new Image();
var logo2  = new Image();

/* Update these to your actual filenames in /Images */
Print1.src = "Images/Print1.jpg";
Print2.src = "Images/Print2.jpg";
logo1.src  = "Images/Logo.jpg";
logo2.src  = "Images/Logo2.jpg";

/* Helper for rollovers that won't conflict with image-swap */
function swapMe(id, which) {
  var el = document.getElementById(id);
  if (el && which && which.src) el.src = which.src;
}

/* ========= IMAGE SWAP ARRAYS ========= */
var imgArray = [
  "bowhunt1.jpg",
  "CoupleEveningLg.jpg",
  "HeliSkiingLg.jpg",
  "ScubaCoupleLg.jpg"
];

var titleArray = [
  "Couple Bowhunting Adventure",
  "Romantic Mountain Sunset",
  "Heli-Skiing in the Alps",
  "Scuba Diving for Two"
];

var imgPath = "Images/Fullsize/";

function swapImage(imgID) {
  var theImage = document.getElementById("theImage");
  var textDiv  = document.getElementById("bottomText");

  var newImg   = imgArray[imgID];
  var newTitle = titleArray[imgID];

  theImage.src = imgPath + newImg;
  textDiv.innerHTML = newTitle;
}

function preloadImages() {
  for (var i = 0; i < imgArray.length; i++) {
    var tmp = new Image();
    tmp.src = imgPath + imgArray[i];
  }
}
