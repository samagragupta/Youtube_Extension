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
  
document.addEventListener('DOMContentLoaded', function () {
  var td = document.querySelectorAll('td');
  for (var i = 0; i < 2; i++) {
    td[i].addEventListener('click', click);
  }
  for (var i = 2; i < 4; i++) {
    td[i].addEventListener('click', click1);
  }
  for (var i = 4; i < 6; i++) {
    td[i].addEventListener('click', click2);
  }
});
  
