var store = document.getElementById('div').innerHTML;
var store_code;

var output = document.getElementById('output');

output.addEventListener('click',
 function() {
  store_code = document.getElementById('textarea').value;
  var code = document.getElementById('textarea').value;
  document.getElementById('div').innerHTML = code;

  document.getElementById('output').style.color = 'white';
  document.getElementById('output').style.backgroundColor = 'orange';

  document.getElementById('code').style.color = 'orange';
  document.getElementById('code').style.backgroundColor = 'rgb(35, 35, 35)';

 }
)



var code = document.getElementById('code');

code.addEventListener('click',
 function() {

  document.getElementById('div').innerHTML = store;

  document.getElementById('textarea').value = store_code;

  document.getElementById('code').style.color = 'white';
  document.getElementById('code').style.backgroundColor = 'orange';

  document.getElementById('output').style.color = 'orange';
  document.getElementById('output').style.backgroundColor = 'rgb(35, 35, 35)';

 }
)
