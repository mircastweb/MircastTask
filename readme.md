##VERSIÓN 0.0.1

Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.

1. Necesito un input con texto añadir tarjeta, con efecto hover que haga que se cambie de color y subraye el texto. 
2. El input al hacer clic debe cambiarse a la forma de un formulario este no tiene nada escrito en el input (evento clic, uso de addClassName).

###MÉTODO UNO

```javascript

  	window.addEventListener("load", function(){
	var agregarForm = document.getElementById("agregarForm");
	var nuevoForm = document.getElementById("nuevoForm");

	/*Declaramos funciones globales de las variables que utilizaremos
	en mis funnciones reutilizables*/
	agregarForm.addEventListener("click", function(){
		hideElement(nuevoForm,agregarForm);
		input.focus();
		input.value="";
	});

	function hideElement(a,b){
		a.classList.toggle("d-none");
		b.classList.toggle("d-none");
	}
```

Se crea una función con parámetros que permtían reutilizar de nuevo, ya que en los futuros casos se puede utilizar la función hideElement() para ocultar los elementos.


Div de agregar tarjeta, antes y con efecto de hover:

![Imagen](http://2.1m.yt/rFGINGk.png "Imagen")

![Imagen](http://2.1m.yt/xOFtmxW.png "Imagen")

Formulario agregado:

![Imagen](http://3.1m.yt/RVrZW6H.png "Imagen")


##VERSIÓN 0.0.2

1. Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista).
2. Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjeta".

Necesito un método que me permita agregar el texto ingresado en la nueva lista y que este aparezca como un nuevo div.

###MÉTODO 

Dentro de la función agregar nuevo formulario tenemos que darle un evento clic al boton, ya que al hacer clic este ejecutará los dos procesos de guardar la información del texto ingresado en el input y también debe crear un nuevo elemento para añadir nuevas añadidor de tarjetas.

Se utiliza una función reutilizable con parametros que nos permitan agregar un form con elementos elegidos. luego de que aparezca debe poder llenarse los datos y aparecer el elemento nuevo que contenga el texto ingresado.

```javascript

	var agregarForm = document.getElementById("agregarForm");
    button.addEventListener("click", function(e){
		e.preventDefault();
		var contenedorLista = document.createElement("div");
		contenedorLista.classList.add("d-inlineblock");
        
        var remover = nuevoForm.parentNode;
		contenedor.appendChild(contenedorLista);
		contenedorLista.appendChild(nuevoForm);
		contenedorLista.appendChild(agregarForm);
		remover.remove();

	});
    
    function newForm(form, clase, contenedor, agregarTarjeta){
		var form = document.createElement(form);
		form.classList.add(clase);
		crearElementos("textarea","textarea","", form);
		crearElementos("button", "boton", "Agregar", form);
		contenedor.appendChild(form);

		form.lastElementChild.addEventListener("click", function(e){
			e.preventDefault();
			agregarTarjeta.classList.remove("d-none");
			form.classList.add("d-none");

			var text = form.firstElementChild.value;

			var div = document.createElement("div");
			div.classList.add("text-tarjetas");
			div.innerHTML= text;
			contenedor.insertBefore(div, agregarTarjeta);
		});
	};

```

Agregamos texto en el Form:

![Imagen](http://4.1m.yt/5e4bVrR.png "Imagen")

Agregamos hacemos clic en el boton y se crea una lista con el texto ingresado en un nuevo elemento y también el de añadir una tarjeta.

![Imagen](http://2.1m.yt/w7ad_fr.png "Imagen")


VERSIÓN 0.0.3

Una vez agregada la lista, mostrar el mensaje clickeable de "Añadir una lista" al lado de la lista agregada.

Agregar un nuevo elemento de Lista al costado, para eso usaré la propiedad de crear elementos y en css el display inline-block entre los elementos contenedores. A partir de la línea 143, se muestra coo agregamos el nuevo elemento a un nuevo contenedor de forma sucesiva.

###MÉTODO

Llamamos a la función en el evento clic del boton.

```javascript

	button.addEventListener("click", function(e){
		e.preventDefault();
		var contenedorLista = document.createElement("div");
		contenedorLista.classList.add("d-inlineblock");
        
		var remover = nuevoForm.parentNode;
		contenedor.appendChild(contenedorLista);
		contenedorLista.appendChild(nuevoForm);
		contenedorLista.appendChild(agregarForm);
		remover.remove();

		var contenedorTarjetas = document.createElement("div");
		contenedorTarjetas.classList.add("trello-body");
		contenedor.insertBefore(contenedorTarjetas,contenedor.lastElementChild);

		hideElement(nuevoForm,agregarForm);

		crearElementos("div", "nuevaLista", input.value, contenedorTarjetas);
		crearElementos("div", "agregar", "Añadir una tarjeta", contenedorTarjetas);
	});
```

Agregamos texto en el Form:

![Imagen](http://2.1m.yt/B97Ojo.png "Imagen")

VERSIÓN 0.0.4

Al dar click en "Añadir una lista", asegurarse que el input del formulario tenga el focus para poder escribir directamente el nombre de la lista.
Dar click al mensaje "Añadir una tarjeta" y mostrar e formulario para agregar la tarjeta (Nota: El ingreso de texto es mediante un textarea).

Para que el texto del input pueda escribir inmediatamente sin necesidad de hacer clic en él, debemos agregar el método focus.

```javascript

  	newInput.focus(); //nombreDelInput.focus();
```
Para mostrar automáticamente el nuevo formulario debemos crear un evento en el div creado de añadir tarjeta y crear un elemento form con sus componentes, tener en cuenta que no debe ser un input, sino un texarea. 

Desde la línea 195 se observa como a traves del llamamiento de mi función podemos crear un form con textarea.

```javascript

  	button.addEventListener("click", function(e){
		e.preventDefault();
		var contenedorLista = document.createElement("div");
		contenedorLista.classList.add("d-inlineblock");
        
		var remover = nuevoForm.parentNode;
		contenedor.appendChild(contenedorLista);
		contenedorLista.appendChild(nuevoForm);
		contenedorLista.appendChild(agregarForm);
		remover.remove();

		var contenedorTarjetas = document.createElement("div");
		contenedorTarjetas.classList.add("trello-body");
		contenedor.insertBefore(contenedorTarjetas,contenedor.lastElementChild);

		hideElement(nuevoForm,agregarForm);

		crearElementos("div", "nuevaLista", input.value, contenedorTarjetas);
		crearElementos("div", "agregar", "Añadir una tarjeta", contenedorTarjetas);
        newForm("form", "fomulario", contenedorTarjetas,contenedor);
	});
    
    function newForm(form, clase, contenedor, agregarTarjeta){
		var form = document.createElement(form);
		form.classList.add(clase);
		crearElementos("textarea","textarea","", form);
		crearElementos("button", "boton", "Agregar", form);
		contenedor.appendChild(form);

		form.lastElementChild.addEventListener("click", function(e){
			e.preventDefault();
			agregarTarjeta.classList.remove("d-none");
			form.classList.add("d-none");

			var text = form.firstElementChild.value;

			var div = document.createElement("div");
			div.classList.add("text-tarjetas");
			div.innerHTML= text;
			contenedor.insertBefore(div, agregarTarjeta);
		});
	}
    
```
Formulario con textarea:

![Imagen](http://3.1m.yt/aLuZuCJ.png "Imagen")

VERSIÓN 0.0.5 y VERSIÓN 0.0.6

Al dar click en el botón de guardar al momento de añadir tarjeta, mostrar el mensaje de "Añadir tarjeta" debajo de la tarjeta añadida.
Asegurar la funcionalidad de poder agregar múltiples listas y tarjetas.


Tenemos que realizar un función que afecte a todos los elementos creados como agregar tarjeta.

```javascript

  	button.addEventListener("click", function(e){
		e.preventDefault();
		var contenedorLista = document.createElement("div");
		contenedorLista.classList.add("d-inlineblock");
        
		var remover = nuevoForm.parentNode;
		contenedor.appendChild(contenedorLista);
		contenedorLista.appendChild(nuevoForm);
		contenedorLista.appendChild(agregarForm);
		remover.remove();

		var contenedorTarjetas = document.createElement("div");
		contenedorTarjetas.classList.add("trello-body");
		contenedor.insertBefore(contenedorTarjetas,contenedor.lastElementChild);

		hideElement(nuevoForm,agregarForm);

		crearElementos("div", "nuevaLista", input.value, contenedorTarjetas);
		crearElementos("div", "agregar", "Añadir una tarjeta", contenedorTarjetas);

		var agregar = document.getElementsByClassName("agregar");
		agregar[agregar.length-1].addEventListener("click", function(){
			this.classList.add("d-none");
			newForm("form", "fomulario", contenedorTarjetas,this);
		});
	});
    
```
Div nuevo guardado valor de tarjeta

![Imagen](http://3.1m.yt/LV2JgOW.png "Imagen")

Tarjetas múltiples

![Imagen](http://2.1m.yt/Mrx8pqM.png "Imagen")

#Ejercicio Trello Parte 2

##VERSIÓN 0.1.0

Implementar el evento Drag & Drop de las tarjetas para que pueda ser movida entre las listas creadas.


Debo volver todo los elementos tarjeta aptos para aplicar el drag, para eso debe agregar el atributo dragable a los elementos que deseo sean movibles, también debo agregar los eventos DnD a las tarjetas y al contenedor.

```javascript
    
    contenedorTarjetas.addEventListener("dragleave", dejarTrello);
    contenedorTarjetas.addEventListener("dragover", arrastrarSobreTrello);
    contenedorTarjetas.addEventListener("drop", soltarTrello);
    contenedorTarjetas.addEventListener("dragend", terminaArrastrarTrello);
    
    var div = document.createElement("div");
    div.classList.add("text-tarjetas");
    div.draggable = true;
    div.setAttribute("id", "id" + contador);
    div.innerHTML = text;
    contador ++;
    div.addEventListener("dragstart", empiezaArrastrar);
    div.addEventListener("drop", soltar);
    div.addEventListener("dragend", terminaArrastrar);          
    contenedor.insertBefore(div, agregarTarjeta);
            
```

Proceso de tarjeta movible entre lista del Trello:

![Imagen](http://4.1m.yt/rQZFBsl.png "Imagen")

![Imagen](http://3.1m.yt/AH4KwRZ.png "Imagen")

![Imagen](http://4.1m.yt/N_w65a.png "Imagen")

##VERSIÓN 0.1.1

Agregar un estilo personalizado a la tarjeta cuando esté siendo arrastrada por el usuario.

Para agregar estilo a mi tarjeta le agrego la clase, le dare un agregar lista en el momento que entra en el evento de arrastre, y removeré la clase en el momento que termino de ser arrastrado mi elemento.

```javascript
    
    function empiezaArrastrar(e) {
		e.dataTransfer.setData("text", this.id);
		this.classList.add("opacidad");
        
	}   

	function terminaArrastrar(e) {
		this.classList.remove("opacidad");
	}

            
```

![Imagen](http://3.1m.yt/E9DfDhV.png "Imagen")

##VERSIÓN 0.1.2

Agregar un estilo a la lista cuando la tarjeta esté pasando por encima (dragover).


Para agregar estilo a mi tarjeta le agrego la clase, le dare un agregar clase a mi div contenedor en el drag over ya que mi efecto debe suceder cuando mi elemento arrastrable pase por encima del div padre.

```javascript
    
    function arrastrarSobreTrello(e) {
		e.preventDefault();
		this.classList.add("bg-blue");
	}

	function dejarTrello(e) {
		e.preventDefault();
		this.classList.remove("bg-blue");
    }

    function terminaArrastrarTrello(e){
    	this.classList.remove("bg-blue");
    }

            
```

Efecto del cuerpo de las Listas cuando se mueve la tarjeta sobre ellos:

![Imagen](http://2.1m.yt/8b0mUUO.png "Imagen")

##VERSIÓN 0.1.3

Agregar una transición css cuando la tarjeta y/o lista haya sido colocada en una nueva lista.

Para agregar trancisión agregaré una clase en css con el contenido de mi trancisión 

```javascript
    
   function terminaArrastrar(e) {
    this.classList.remove("opacidad");
    this.classList.add("transicion");
	}
            
```




