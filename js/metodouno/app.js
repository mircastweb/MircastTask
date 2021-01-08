//Método creando elementos desde cero
//Se que ruido visual, pero conservarlo como referencia
window.addEventListener("load", function(){
   var addForm = document.getElementById("agregarForm"); 
	addForm.addEventListener("click", function(e) {
		e.preventDefault();
		addNewForm(this);
		deleteElement();
	});
});

function deleteElement(){
	var ocultar = document.getElementById("agregarForm");
	ocultar.classList.add("d-none");
}

function addNewForm(elemento){
	//agregando el form
	var padre = elemento.parentElement;
	var form = document.createElement("form");
	padre.appendChild(form);
	form.setAttribute("id","nuevoForm");
	form.classList.add("formulario");
	//agregando input del form
	var input = document.createElement("input");
	form.appendChild(input);
	input.setAttribute("id","inputForm");
	input.focus();
	input.classList.add("entrada");
	//agregando boton del form
	var boton = document.createElement("button");
	form.appendChild(boton);
	boton.setAttribute("id","botonForm");
	boton.classList.add("boton");
	boton.addEventListener("click",function(event){
		event.preventDefault();
		newTool(elemento); 
		deleteForm(elemento);
		addAgregar(elemento);
		elemento.parentElement.classList.add("trello-body");
		//document.getElementById("agregarForm").classList.add("d-none");
		//document.getElementById("nuevoForm").classList.add("d-none");
		addNewLista(elemento);
	});
	//agregando nodo texto dentro del boton 
	var textBoton = document.createTextNode("Añadir lista");
	boton.appendChild(textBoton);
}

function deleteForm(elemento){
	var elementToRemove = document.getElementById("nuevoForm");
	elementToRemove.classList.add("d-none");
}

function newTool(elemento){
	var text = document.getElementById("inputForm").value;
	var padre = elemento.parentElement;
	var tool = document.createElement("div");
	padre.appendChild(tool);
	tool.textContent = text;
	tool.classList.add("nuevaLista");
}

function addAgregar(elemento){
	var padre = elemento.parentElement;
	var agregar = document.createElement("div");
	padre.appendChild(agregar);
	agregar.setAttribute("id","agregando");
	agregar.classList.add("agregar");
	//Nodo elemento
	var textAgregar = document.createTextNode("Añadir una tarjeta");
	agregar.appendChild(textAgregar);
	
}

function addNewLista(){
	var contenedor = document.getElementById("contenedor");
	var padre = document.createElement("section");
	contenedor.appendChild(padre);
	padre.classList.add("d-inlineblock");
	var aparecer = document.getElementById("agregarForm");
	aparecer.classList.add("d-block");
	padre.appendChild(aparecer);
}