var UI = require('ui');
var Vector2 = require('vector2');

var number;

var title = new UI.Text({
	text: 'Pick a number from 1-10',
	position: new Vector2(0,20),
	size: new Vector2(144, 60),
  font: 'gothic-28-bold',
  textAlign: 'center',
	color: "black",
		
});
var text = new UI.Text({
	text: 'Shake or Press Select',
	position: new Vector2(0,100),
	size: new Vector2(144, 60),
  font: 'gothic-18-bold',
  textAlign: 'center',
	color: "black",
});



var main = new UI.Window({
	fullscreen: 'true',
	backgroundColor: 'white'
});

main.add(title);
main.add(text);


main.show();

main.on('click', 'select', function(e) {
  showRandom();
  
});


main.on('accelTap', function(){
  showRandom();
});

function showRandom () {
	var num = Math.floor((Math.random() * 10) + 1);
	number = new UI.Window({
    fullscreen: true,
		backgroundColor: 'white'
  });
	var textfield = new UI.Text({
		text: num,
		position: new Vector2(0,65),
		size: new Vector2(144, 60),
    font: 'gothic-28-bold',
    textAlign: 'center',
		color: "black",
  });	
	number.add(textfield);
	number.show();
}
