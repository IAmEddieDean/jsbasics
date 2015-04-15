'use strict';

// var doiArr = text.toLowerCase().match(/[a-z']+/gi);
// //var theCounter = 0;
// var counts = {};
// doiArr.forEach(function(word){
//     counts[word] = counts[word] || 0;
//     counts[word]++;
//
// });
// var results = []
//
// function toCamelCase(word){
//   var wordArr = word.split('-');
//   wordArr.forEach(function(word, index){
//     if(index === 0) {
//       results.push(word.toLowerCase());
//     }else{
//       results.push(word.toLowerCase().word[0].toUpperCase());
//     }
//   });
// }

$(document).ready(init);

function init(){
  $(document).keypress(printToScreen);
}

var numbers =[];
function printToScreen(event){
  switch (String.fromCharCode(event.which)){
    case '+':
      sumNums();
      break;
    case '-':
      subNums();
      break;
    case '*':
      multNums();
      break;
    
    case '/':
      divNums();
      break;
    
    default:
      numbers.push(String.fromCharCode(event.which));
      var $div = $('<div>');
      $div.text(numbers.slice(-1)[0]);
      $('#numbers').append($div);
      $('#total').empty();
    }
  }
function sumNums(){
  var total = numbers.reduce(function(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
  });
  printTotal(total);
}
function multNums(){
  var total = numbers.reduce(function(a, b){
    return a*b;
  });
  printTotal(total);
}
function subNums(){
  var total = numbers.reduce(function(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a-b;
  });
  printTotal(total);
}
function divNums(){
  var total = numbers.reduce(function(a, b){
    return a/b;
  });
printTotal(total);
}
function printTotal(total){
  var $div = $('<div>');
  $div.text(total);
  $('#total').append($div);
  $('#numbers').empty();
  $('#input').val('');
  numbers = []
}
