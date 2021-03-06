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

function operacionesRestantes(){
	if(opFaltante === "sqrt"){
		numeros.push(0.5)
	}
	opFaltante = "";
}

function display(value){
	if(end){
		limpiar();

		end = false;
	}

	if(value === "+" || value === "-" || value === "*" || value === "/" || value === "^"){
		if(contNums > 0){
			guardarNum();
		}
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
	else if(value === "sin" || value === "asin" || value === "cos" || value === "acos" || value === "tan" || value === "atan"){
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
	else if(value === "Pi"){
		numActual = Math.PI;
		document.getElementById("display").value = document.getElementById("display").value + "Pi";
		contNums ++;
	}
	else if(value === "e"){
		numActual = Math.E;
		document.getElementById("display").value = document.getElementById("display").value + "e";
		contNums ++;
	}
	else{
		document.getElementById("display").value = document.getElementById("display").value + value;
		if(parseFloat(numActual) == Math.PI || parseFloat(numActual) == Math.E){
			error = true;
		}
		numActual = numActual + value;
		contOperaciones = 0;
		contNums ++;
	}
}


function compute(){
	if(negativo){
		document.getElementById("display").value = document.getElementById("display").value + ")";
	}
	if(operacionConParentesis){
		document.getElementById("display").value = document.getElementById("display").value + ")";
	}

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
		end = true;
	}
	else{

		document.getElementById("cola").value = document.getElementById("display").value + "=";

		while(operaciones.length > 0){
			var index = operaciones.indexOf("sin");

			if(index != -1){

				num2 = parseFloat(numeros[index+1]);
				var total = Math.sin(num2);
				numeros[index]=total;
				numeros.splice(index+1,1);
				operaciones.splice(index,1);
			}
			else{

				index = operaciones.indexOf("asin");
				if(index != -1){

					num2 = parseFloat(numeros[index+1]);
					var total = Math.asin(num2);
					numeros[index]=total;
					numeros.splice(index+1,1);
					operaciones.splice(index,1);
				}

				else{

					index = operaciones.indexOf("cos");
					if(index != -1){

						num2 = parseFloat(numeros[index+1]);
						var total = Math.cos(num2);
						numeros[index]=total;
						numeros.splice(index+1,1);
						operaciones.splice(index,1);
					}
					else{

						index = operaciones.indexOf("acos");
						if(index != -1){

							num2 = parseFloat(numeros[index+1]);
							var total = Math.acos(num2);
							numeros[index]=total;
							numeros.splice(index+1,1);
							operaciones.splice(index,1);
						}
						else{

							index = operaciones.indexOf("tan");
							if(index != -1){

								num2 = parseFloat(numeros[index+1]);
								var total = Math.tan(num2);
								numeros[index]=total;
								numeros.splice(index+1,1);
								operaciones.splice(index,1);
							}
							else{

								index = operaciones.indexOf("atan");
								if(index != -1){

									num2 = parseFloat(numeros[index+1]);
									var total = Math.atan(num2);
									numeros[index]=total;
									numeros.splice(index+1,1);
									operaciones.splice(index,1);
								}
								index = operaciones.indexOf("^");

								if(index != -1){
									num1 = parseFloat(numeros[index]);
									num2 = parseFloat(numeros[index+1]);
									if(num1 < 0 && num2 == 0.5){
										error = true;
										break;
									}
									var total = Math.pow(num1,num2);
									numeros[index]=total;
									numeros.splice(index+1,1);
									operaciones.splice(index,1);
								}
								else{
									index = operaciones.indexOf("*");
									if(index != -1){
										num1 = parseFloat(numeros[index]);
										num2 = parseFloat(numeros[index+1]);
										var total = num1*num2;
										numeros[index]=total;
										numeros.splice(index+1,1);
										operaciones.splice(index,1);
									}
									else{

										index = operaciones.indexOf("/");
										if(index != -1){
											num1 = parseFloat(numeros[index]);
											num2 = parseFloat(numeros[index+1]);
											var total = num1/num2;
											numeros[index]=total;
											numeros.splice(index+1,1);
											operaciones.splice(index,1);
										}
										else{
											index = operaciones.indexOf("+");
											if(index != -1){
												num1 = parseFloat(numeros[index]);
												num2 = parseFloat(numeros[index+1]);
												var total = num1+num2;
												numeros[index]=total;
												numeros.splice(index+1,1);
												operaciones.splice(index,1);
											}
											else{
												index = operaciones.indexOf("-");
												if(index != -1){
													num1 = parseFloat(numeros[index]);
													num2 = parseFloat(numeros[index+1]);
													var total = num1-num2;
													numeros[index]=total;
													numeros.splice(index+1,1);
													operaciones.splice(index,1);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}

		if(error){
			document.getElementById("display").value = "Error";
			end = true;
		}
		else{
			document.getElementById("display").value = numeros[0];
		}
		end = true;
	}



}




function guardarNum(){
	var num = 0;
	var num = numActual;
	numActual = "";

	if(negativo){
		num = (-1)*num;
	}

	if(contNums > 0){
		numeros.push(num);
	}

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
	opFaltante = false;
	numActual = "";
}

function operation(operation){

	if(end){
		limpiar();

		end = false;
	}

	if(operation === "^2"){
		guardarNum();
		operaciones.push("^");
		numeros.push("2");
		display(operation);

	}
	else if(operation === "sqrt"){
		if(contOperaciones < 1){
			if(operaciones.length > 0){
				error = true;
			}
		}
		operacionConParentesis = true;
		operaciones.push("^");
		display(operation);
		opFaltante = "sqrt";
	}
	else if(operation === "sin" || operation === "asin" || operation === "cos" || operation === "acos" || operation === "tan" || operation === "atan"){
		if(contOperaciones < 1){
			if(operaciones.length > 0){
				error = true;
			}
		}
		operacionConParentesis = true;
		operaciones.push(operation);
		numeros.push(operation);
		display(operation);

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
