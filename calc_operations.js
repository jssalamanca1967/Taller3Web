var operacionesValidas = ["+","-","*","/","^2","^","sqrt"];
var operacionesPar = ["sqrt"]
var operaciones = [];
var numeros = [];
var contOperaciones = 0;
var contOpsPar = 0;
var contNums = 0;
var error = false;
var negativo = false;
var operacionConParentesis = false;
var numActual = "";
var opFaltante = "";
var end = false;

function comprobar(){
	document.getElementById("ops").value = operaciones;
	document.getElementById("nums").value = numeros;
}

function operacionesRestantes(){
	if(opFaltante === "sqrt"){
		numeros.push("1/2")
	}
	opFaltante = "";
}

function display(value){
	if(end){
		limpiar();
		comprobar();
		end = false;
	}

	if(value === "+" || value === "-" || value === "*" || value === "/" || value === "^"){
		guardarNum();
		if(negativo || operacionConParentesis){
			if(negativo){
				document.getElementById("display").value = document.getElementById("display").value + ")" + value;
				negativo = false;
			}
			if(operacionConParentesis){
				operacionesRestantes();
				document.getElementById("display").value = document.getElementById("display").value + ")" + value;
				operacionConParentesis = false;
			}
		}
		else {
			document.getElementById("display").value = document.getElementById("display").value + value;
		}

	}
	else if(value === "sqrt"){
		document.getElementById("display").value = document.getElementById("display").value + value + "(";
	}
	else if(value === "^2"){
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
	else if(value === "(-)"){
		document.getElementById("display").value = document.getElementById("display").value + '(-';

		negativo = true;
	}
	else{
		document.getElementById("display").value = document.getElementById("display").value + value;
		numActual = numActual + value;
		contOperaciones = 0;
		contNums ++;
	}

	comprobar();

}

function compute(){
	if(contNums > 0){
		guardarNum();
	}

	operacionesRestantes();


	var dif = numeros.length - operaciones.length;

	if(dif != 1){
		error = true;
	}

	if(error){
		document.getElementById("display").value = "Error";
	}
	else{

		while(operaciones.length > 0){
			var index = operaciones.indexOf("^");

			if(index != -1){
				num1 = parseInt(numeros[index]);
				num2 = parseInt(numeros[index+1]);
				var total = Math.pow(num1,num2);
				numeros[index]=total;
				numeros.splice(index+1,1);
				operaciones.splice(index,1);
			}
			else{
				index = operaciones.indexOf("*");
				if(index != -1){
					num1 = parseInt(numeros[index]);
					num2 = parseInt(numeros[index+1]);
					var total = num1*num2;
					numeros[index]=total;
					numeros.splice(index+1,1);
					operaciones.splice(index,1);
				}
				else{

					index = operaciones.indexOf("+");
					if(index != -1){
						num1 = parseInt(numeros[index]);
						num2 = parseInt(numeros[index+1]);
						var total = num1+num2;
						numeros[index]=total;
						numeros.splice(index+1,1);
						operaciones.splice(index,1);
					}
					else{
						index = operaciones.indexOf("-");
						if(index != -1){
							num1 = parseInt(numeros[index]);
							num2 = parseInt(numeros[index+1]);
							var total = num1+num2;
							numeros[index]=total;
							numeros.splice(index+1,1);
							operaciones.splice(index,1);
						}

					}

				}
			}
		}

		document.getElementById("display").value = numeros[0];

		end = true;


	}

	comprobar();

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

	operaciones = [];
	numeros = [];
	contOperaciones = 0;
	contOpsPar = 0;
	contNums = 0;
	error = false;
	negativo = false;
	operacionConParentesis = false;
	numActual = "";
}

function operation(operation){

	if(operation === "^2"){
		guardarNum();
		operaciones.push("^");
		numeros.push("2");
		display(operation);

	}
	else if(operation === "sqrt"){
		if(contOperaciones < 1){
			error = true;
		}
		operacionConParentesis = true;
		operaciones.push("^");
		display(operation);
		opFaltante = "sqrt";
	}
	else{
		contOperaciones ++;
		operaciones.push(operation);
		display(operation);
	}

	if(contOperaciones > 1){
		error = true;
	}
}
