document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var btnForm = document.createElement( 'button' );

setTimeout(function(){
	alert('after 5 seconds');
    document.getElementById('related').prepend( div );
    div.appendChild( btnForm );
    div.id = 'myDivId';
    btnForm.innerHTML = 'Download';
    div.style.top = '69.5%';
    div.style.left = '40%';
    div.style.width = '10%';   
    div.style.height = '7%';
    div.style.backgroundColor = 'blue';
},5000); 