function click(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('secondary').style.backgroundColor='" + e.target.id + "'"});
      console.log(e.target.id);
}

function click1(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('columns').style.backgroundColor='" + e.target.id + "'"});
      console.log(e.target.id);
}
function click2(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('masthead').style.backgroundColor='" + e.target.id + "'"});
      console.log(e.target.id);
}
function color(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('masthead').style.backgroundColor='" + e.target.value + "'"});
      console.log(e.target.id);
}
  
document.addEventListener('DOMContentLoaded', function () {
  var td = document.querySelectorAll('td');
  for (var i = 0; i < 9; i++) {
    if(i % 3 == 0){
      td[i].addEventListener('click', click);
    }
    if(i % 3 == 1){
      td[i].addEventListener('click', click1);
    }
    if(i % 3 == 2){
      td[i].addEventListener('click', click2);
    }
  }

  var inp = document.querySelectorAll('input');
  for (var j = 0 ; j < inp.length ; j++){
    inp[j].addEventListener('input', color);
  }

});
  
