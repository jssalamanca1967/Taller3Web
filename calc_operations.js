var operacionesValidas = ["+","-","*","/","^2","^","sqrt"];
var operacionesPar = ["sqrt"]
var operaciones = [];
var numeros = [];
var contOperaciones = 0;
var contNums = 0;
var error = false;
var negativo = false;
var operacionConParentesis = false;
var numActual = "";

function display(value){
	if(value === "+" || value === "-" || value === "*" || value === "/" || value === "^2" || value === "^"){
		guardarNum();
		if(negativo){
			document.getElementById("display").value = document.getElementById("display").value + ")" + value;
			negativo = false;
		}
		else if(operacionConParentesis){
			document.getElementById("display").value = document.getElementById("display").value + ")" + value;
			operacionConParentesis = false;
		}

		else {
			document.getElementById("display").value = document.getElementById("display").value + value;
		}
	}
	else if(value === "sqrt"){
		document.getElementById("display").value = document.getElementById("display").value + value + "(";

	}
	else{
		document.getElementById("display").value = document.getElementById("display").value + value;
		numActual = numActual + value;
		contOperaciones = 0;
		contNums ++;
	}

	document.getElementById("ops").value = operaciones;
	document.getElementById("nums").value = numeros;

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

	// var value = document.getElementById("display").value;
	//
	// var longitud = value.length - 1;
	// var start = longitud - contNums;
	//
	// var num = value.substring(start,longitud);

	var num = 0;
	var num = numActual;
	numActual = "";

	if(negativo){
		num = (-1)*num;
	}

	numeros.push(num);

	contNums = 0;

}

function limpiar(){
	document.getElementById("display").value = "";

}

function operation(operation){

	if(contOperaciones > 1){
		error = true;
	}
	else{
		if(operation === "^2"){
			guardarNum();
			operaciones.push("^");
			numeros.push(2);
		}
		else if(operation === "sqrt"){
			operacionConParentesis = true;
			operaciones.push("^");
			numeros.push(1/2);
		}
		else{
			contOperaciones ++;
			operaciones.push(operation);
			display(operation);
		}
	}


}

function negativo(){
	display('(-');

	negativo = true;
}
