


function display(value){
	document.getElementById("display").value = document.getElementById("display").value + value;
}

function compute(){
	document.getElementById("display").value = "Computing";
}

function limpiar(){
	document.getElementById("display").value = "";
}

function operation(operation){

	document.getElementById("display").value = document.getElementById("display").value + operation.value;


}
