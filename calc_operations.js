var operaciones = [];
var numeros = [];
var contOperaciones = 0;
var contNums = 0;
var error = false;

function display(value){
	document.getElementById("display").value = document.getElementById("display").value + value;

	if(value === "+" || value === "-" || value === "*" || value === "/" || value === "^2" || value === "^" || value === "sqrt"){
		guardarNum();
	}
	else{
		contOperaciones = 0;
		contNums ++;
	}
}

function compute(){

	var value = document.getElementById("display").value;

	if(error){
		document.getElementById("display").value = "Error";
	}
	else{

	}

}

function guardarNum(){

	var value = document.getElementById("display").value;

	var longitud = value.length - 1;
	var start = longitud - contNums;

	var num = value.substring(start,longitud);

	numeros.push(num);

	contNums = 0;

}

function limpiar(){
	document.getElementById("display").value = "";
}

function operation(operation){
	operaciones.push(operation);
	contOperaciones ++;

	display(operation);
	if(contOperaciones > 1){
		error = true;
	}
}
