var chessBoard = document.getElementById('chessBoard');

for (var i = 0; i < 64; i++) {
 var pre = document.createElement('pre')
 chessBoard.prepend(pre);
}

var x = 0;
var left;
for (var i = 0; i < 8; i++) {
 if ((i % 2) == 1) {
  chessBoard.children[i].style.backgroundColor = 'rgb(105, 45, 45)';
 }else{
  chessBoard.children[i].style.backgroundColor = 'rgb(125, 66, 50)';
 }
 left= x + 'px';
 chessBoard.children[i].style.left= left;
 x = x + 45;
}



x= 0;
for (var i = 8; i < 16; i++) {
 if ((i % 2) == 1) {
  chessBoard.children[i].style.backgroundColor = 'rgb(125, 66, 50)';
 }else{
  chessBoard.children[i].style.backgroundColor = 'rgb(105, 45, 45)';
 }
 left= x + 'px';
 chessBoard.children[i].style.top= '45px';
 chessBoard.children[i].style.left= left;
 x = x + 45;
}



x = 0;
for (var i = 16; i < 24; i++) {
 if ((i % 2) == 1) {
  chessBoard.children[i].style.backgroundColor = 'rgb(105, 45, 45)';
 }else{
  chessBoard.children[i].style.backgroundColor = 'rgb(125, 66, 50)';
 }
 left= x + 'px';
 chessBoard.children[i].style.top= '90px';
 chessBoard.children[i].style.left= left;
 x = x + 45;
}


x= 0;
for (var i = 24; i < 32; i++) {
 if ((i % 2) == 1) {
  chessBoard.children[i].style.backgroundColor = 'rgb(125, 66, 50)';
 }else{
  chessBoard.children[i].style.backgroundColor = 'rgb(105, 45, 45)';
 }
 left= x + 'px';
 chessBoard.children[i].style.top= '135px';
 chessBoard.children[i].style.left= left;
 x = x + 45;
}



x = 0;
for (var i = 32; i < 40; i++) {
 if ((i % 2) == 1) {
  chessBoard.children[i].style.backgroundColor = 'rgb(105, 45, 45)';
 }else{
  chessBoard.children[i].style.backgroundColor = 'rgb(125, 66, 50)';
 }
 left= x + 'px';
 chessBoard.children[i].style.top= '180px';
 chessBoard.children[i].style.left= left;
 x = x + 45;
}



x= 0;
for (var i = 40; i < 48; i++) {
 if ((i % 2) == 1) {
  chessBoard.children[i].style.backgroundColor = 'rgb(125, 66, 50)';
 }else{
  chessBoard.children[i].style.backgroundColor = 'rgb(105, 45, 45)';
 }
 left= x + 'px';
 chessBoard.children[i].style.top= '225px';
 chessBoard.children[i].style.left= left;
 x = x + 45;
}


x = 0;
for (var i = 48; i < 56; i++) {
 if ((i % 2) == 1) {
  chessBoard.children[i].style.backgroundColor = 'rgb(105, 45, 45)';
 }else{
  chessBoard.children[i].style.backgroundColor = 'rgb(125, 66, 50)';
 }
 left= x + 'px';
 chessBoard.children[i].style.top= '270px';
 chessBoard.children[i].style.left= left;
 x = x + 45;
}


x= 0;
for (var i = 56; i < 64; i++) {
 if ((i % 2) == 1) {
  chessBoard.children[i].style.backgroundColor = 'rgb(125, 66, 50)';
 }else{
  chessBoard.children[i].style.backgroundColor = 'rgb(105, 45, 45)';
 }
 left= x + 'px';
 chessBoard.children[i].style.top= '315px';
 chessBoard.children[i].style.left= left;
 x = x + 45;
}
