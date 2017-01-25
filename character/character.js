'use strict';

// var divCollection = document.getElementsByClassName('traits');
// var characters = Array.prototype.slice.call(divCollection);
// console.log(characters);
// characters.forEach(function (character) {
//   character.addEventListener('click', function () {
//     var charName = character.id;
//     var imgUrl = character.firstChild.src;
//     localStorage.imgUrl = character.firstChild.src;
//
//     console.log(character);
//
//   });
// });
function displayText() {
  var bodyEl = document.getElementById('body');
  var user = localStorage.userName;
  var createHeader = document.createElement('h3');
  createHeader.textContent = ('Hello ' + user + ', please choose a character:');
  bodyEl.appendChild(createHeader);
}
var images = {
  allie: '../images/allieAvatar.png',
  luis: '../images/avatar_luis.png',
  david: '../images/avatar_david.png',
  logan: '../images/logan_avatar.png'
};
displayText();
//Logan contribution
//Allie's Data
var allieEl = document.getElementById('choice-one');
var allie = function(event){
  var check = confirm('do you wish to continue');
  if(check === true){
    localStorage.setItem('image', images.allie);
    localStorage.setItem('health', 100);
    localStorage.setItem('grade', 110);
    localStorage.setItem('social', 90);
    location.href = '../game/weekOne.html';
  }
};
allieEl.addEventListener('click', allie, false);
//Logan's data
var loganEl = document.getElementById('choice-two');
var logan = function(event){
  var check = confirm('do you wish to continue');
  if(check === true){
    localStorage.setItem('image', images.logan);
    localStorage.setItem('health', 120);
    localStorage.setItem('grade', 100);
    localStorage.setItem('social', 80);
    location.href = '../game/weekOne.html';
  }
};
loganEl.addEventListener('click', logan, false);
//Luis' data
var luisEl = document.getElementById('choice-three');
var luis = function(event){
  var check = confirm('do you wish to continue');
  if(check === true){
    localStorage.setItem('image', images.luis);
    localStorage.setItem('health', 110);
    localStorage.setItem('grade', 110);
    localStorage.setItem('social', 80);
    location.href = '../game/weekOne.html';
  }
};
luisEl.addEventListener('click', luis, false);
//david's data
var davidEl = document.getElementById('choice-four');
var david = function(event){
  var check = confirm('do you wish to continue');
  if(check === true){
    localStorage.setItem('image', images.david);
    localStorage.setItem('health', 80);
    localStorage.setItem('grade', 100);
    localStorage.setItem('social', 120);
    location.href = '../game/weekOne.html';
  }
};
davidEl.addEventListener('click', david, false);
