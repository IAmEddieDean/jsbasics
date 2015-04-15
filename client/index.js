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
  $('#nums').click(grabNum);
}

// function clickAdd(){
//   $('#nums').click(grabNum);
// }
var numbers =[];
function grabNum(){
  var currNum = $('#input').val();
  if (currNum === '='){
    sumNums();
  }else{
    numbers.push(currNum);
    //var oldNum = $('#numbers').text();
    var $div = $('<div>');
    $div.text(currNum);
    $('#numbers').append($div);
    $('#input').val('');
    $('#total').empty();
  }
}
function sumNums(){
  var total = numbers.reduce(function(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
  });
  var $div = $('<div>');
  $div.text(total);
  $('#total').append($div);
  $('#numbers').empty();
  $('#input').val('');
}
