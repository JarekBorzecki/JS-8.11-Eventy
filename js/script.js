//Event

var list = document.getElementById('Lista'),
		add = document.getElementById('addElem'),
		number = 1;

add.addEventListener('click', function() {
		
	list.innerHTML += '<li>item ' + number + '</li>';
	number++;

});