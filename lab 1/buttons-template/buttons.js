var num1 = 0;

var button1 = document.getElementById("button1").addEventListener("click", addButton1);
var button2 = document.getElementById("button2").addEventListener("click", addButton2);
var button3 = document.getElementById("button3").addEventListener("click", addButton3);

function addButton1() {
	num1++;
	document.getElementById('button1').innerHTML = num1;
	document.getElementById('main').style.background = "url('images/bg1.jpg')";
	document.getElementById('counter').src = "images/1.jpg";
	document.getElementById("button1").style.backgroundColor = "red";
	document.getElementById("button2").style.backgroundColor = "green";
	document.getElementById("button3").style.backgroundColor = "green";
	document.getElementById("button1").disabled = true;
	document.getElementById("button2").disabled = false;
	document.getElementById("button3").disabled = false;
}

var num2 = 0;

function addButton2() {
	num2++;
	document.getElementById('button2').innerHTML = num2;
	document.getElementById('main').style.background = "url('images/bg2.jpg')";
	document.getElementById('counter').src = "images/2.jpg";
	document.getElementById("button1").style.backgroundColor = "green";
	document.getElementById("button2").style.backgroundColor = "red";
	document.getElementById("button3").style.backgroundColor = "green";
	document.getElementById("button1").disabled = false;
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = false;
}

var num3 = 0;

function addButton3() {
	num3++;
	document.getElementById('button3').innerHTML = num3;
	document.getElementById('main').style.background = "url('images/bg3.jpg')";
	document.getElementById('counter').src = "images/3.jpg";
	document.getElementById("button1").style.backgroundColor = "green";
	document.getElementById("button2").style.backgroundColor = "green";
	document.getElementById("button3").style.backgroundColor = "red";
	document.getElementById("button1").disabled = false;
	document.getElementById("button2").disabled = false;
	document.getElementById("button3").disabled = true;
}
