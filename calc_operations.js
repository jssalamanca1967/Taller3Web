


function display(value){
	document.getElementById("display").value = document.getElementById("display").value + value;
}

function compute(){
	document.getElementById("display").value = "Computing";
}

function clear(){
	var vacio;
	document.getElementById("display").value = vacio;
}

function operation(operation){

	document.getElementById("display").value = document.getElementById("display").value + operation.value;


}
