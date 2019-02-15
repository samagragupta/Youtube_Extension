function color(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('masthead').style.backgroundColor='" + e.target.value + "'"});
      console.log(e.target.id);
}
function color1(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('secondary').style.backgroundColor='" + e.target.value + "'"});
      console.log(e.target.id);
}
function color2(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('columns').style.backgroundColor='" + e.target.value + "'"});
      console.log(e.target.id);
}
function color3(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('primary').style.backgroundColor='" + e.target.value + "'"});
      console.log(e.target.id);
}
function color4(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('page-manager').style.backgroundColor='" + e.target.value + "'"});
      console.log(e.target.id);
}
function color5(e) {
  chrome.tabs.executeScript(null,
      // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      {code:"document.getElementById('guide-inner-content').style.backgroundColor='" + e.target.value + "'"});
      console.log(e.target.id);
}
  
document.addEventListener('DOMContentLoaded', function () {
  var inp = document.querySelectorAll('input');
  for (var i = 0 ; i < inp.length ; i++){
    if(i % 6 == 0){
      inp[i].addEventListener('input', color);
    }
    if(i % 6 == 1){
      inp[i].addEventListener('input', color1);
    }
    if(i % 6 == 2){
      inp[i].addEventListener('input', color2);
    }
    if(i % 6 == 3){
      inp[i].addEventListener('input', color3);
    }
    if(i % 6 == 4){
      inp[i].addEventListener('input', color4);
    }
    if(i % 6 == 5){
      inp[i].addEventListener('input', color5);
    }
  }
});
  
