var operacionesValidas = ["+","-","*","/","^2","^","sqrt"];
var operaciones = [];
var numeros = [];
var contOperaciones = 0;
var contNums = 0;
var error = false;
var negativo = true;

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

	if(value === "+" || value === "-" || value === "*" || value === "/" || value === "^2" || value === "^" || value === "sqrt"){
		error = true;
	}

	if(error){
		document.getElementById("display").value = "Error";
	}
	else{
		var i = 0;
		var j = 0;
		while(i < operaciones.length && j < numeros.length){
			var operacion = operaciones[i];
			var num1 = numeros[j];
			var num2 = numeros[j+1];

			i++;
			j++;
		}

	}

}

function guardarNum(){

	var value = document.getElementById("display").value;

	var longitud = value.length - 1;
	var start = longitud - contNums;

	var num = value.substring(start,longitud);

	numeros.push(num);

	if(numeros.length > 1){
		var suma = numeros[0]+numeros[1];
		document.getElementById("display").value = suma;
	}

	contNums = 0;

}

function limpiar(){
	document.getElementById("display").value = "";

}

function operation(operation){
	contOperaciones ++;
	if(contOperaciones > 1){
		error = true;
	}
	else{
		if(operation === "^2"){
			operaciones.push("^");
			numeros.push(2);
		}
		else{
			operaciones.push(operation);
		}
	}


	display(operation);

}

function negativo(){
	display('-');


}
