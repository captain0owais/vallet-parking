//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
car_width=7;
car_height=25;

background_image = "parkingLot.jpg";
car_image = "car2.png";

//Set initial position for a car image.
car_x=5;
car_y=400;
function add() {
	//upload car, and background images on the canvas.
background_imgtag=new Image();
	background_imgtag.onload = uploadBackground;
	background_imgtag.src=background_image;
	
car_imgtag=new Image();
	car_imgtag.onload= uploadgreencar;
	car_imgtag.src=car_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(car_y >=0)
	{
		car_y = car_y - 10;
		console.log("When up arrow is pressed; |X =" + car_x + "|" + "|Y =" + car_y + "|");
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(car_y <=400)
	{
		car_y = car_y + 10;
		console.log("When down arrow is pressed; |X =" + car_x + "|" + "|Y =" + car_y + "|");
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(car_x >=0)
	{
		car_x = car_x - 3;
		console.log("When left arrow is pressed; |X =" + car_x + "|" + "|Y =" + car_y + "|");
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(car_x <=800)
	{
		car_x = car_x + 3;
		console.log("When right arrow is pressed; |X =" + car_x + "|" + "|Y =" + car_y + "|");
		uploadBackground();
		uploadgreencar();
	}
}
