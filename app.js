var bag = new Items('bag', 'img/bag.jpg');
var banana = new Items('banana', 'img/banana.jpg');
var bathroom = new Items('bathroom', 'img/bathroom.jpg');
var boots = new Items('boots', 'img/boots.jpg');
var breakfest = new Items('breakfast', 'img/breakfast.jpg');
var bubblegum = new Items('bubblegum', 'img/bubblegum.jpg');
var chair = new Items('chair', 'img/chair.jpg');
var cthulhu = new Items('cthulhu', 'img/cthulhu.jpg');
var dog = new Items('dogDuck', 'img/dog-duck.jpg');
var dragon = new Items('dragon', 'img/dragon.jpg');
var pen = new Items('pen', 'img/pen.jpg');
var petSweep = new Items('petSweep', 'img/pet-sweep.jpg');
var scissors = new Items('scissors', 'img/scissors.jpg');
var shark = new Items('shark', 'img/shark.jpg');
var sweep = new Items('sweep', 'img/sweep.jpg');
var tauntaun = new Items('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Items('unicorn', 'img/unicorn.jpg');
var usb = new Items('usb', 'img/usb.jpg');
var waterCan = new Items('waterCan', 'img/water-can.jpg');
var wineGlass = new Items('wineGlass', 'img/wine-glass.jpg');
var itemsArr = [bag, banana, bathroom, boots, breakfest, chair, cthulhu, dog, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
function Items(name, img){
  this.name = name;
  this.img = img;
}
for (var i = 0; i < itemsArr.length; i++){
  console.log(itemsArr[i])
}
