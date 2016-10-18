window.addEventListener("load", function() {
	var contenedorTrello = document.getElementById("contenedorTrello");
	var contenedorForm = document.getElementById("contenedorForm");
	var spanLista = document.getElementById("spanLista");
	var formulario = document.getElementById("formulario");
	var textoInput = document.getElementById("textoInput");
	var botonGuardar = document.getElementById("guardar");
	var botonCerrar = document.getElementById("cerrar");

	spanLista.addEventListener("click", function() {
		spanLista.classList.add("formularioOcultar");
		formulario.classList.remove("formularioOcultar");
		textoInput.focus();
	});

	botonGuardar.addEventListener("click", cajaFormulario );

	function cajaFormulario(e){
		e.preventDefault();
		formulario.classList.add("formularioOcultar");
		spanLista.classList.remove("formularioOcultar");

		var padre = this.parentElement.parentElement;

		padre.textContent = textoInput.value;
		textoInput.value="";
		contenedorForm.classList.add("titulo");


		var contenedor = document.createElement("div");
		contenedor.classList.add("titulo");
		contenedor.insertBefore(spanLista, contenedor.childNodes[0]);
		contenedor.insertBefore(formulario, contenedor.childNodes[1]);
		contenedorTrello.appendChild(contenedor);

		var anadirTarea = document.createElement("div");
		anadirTarea.classList.add("anadirTarea");
		anadirTarea.innerText = "Añadir nueva tarea";
		padre.appendChild(anadirTarea);

		anadirTarea.addEventListener("click", tarjetaForm);

		function tarjetaForm(e){
			e.preventDefault();
			anadirTarea.classList.add("ocultar");
			var contenedorTarea = document.createElement("div");
			var textareaTarjeta = document.createElement("textarea");
			var botonAnadir = document.createElement("button");
			var btnCerrar = document.createElement("div");

			textareaTarjeta.classList.add("textareaTarjeta");
			botonAnadir.classList.add("botonAnadir");
			botonAnadir.textContent = "Añadir";

			contenedorTarea.insertBefore(textareaTarjeta,contenedorTarea.childNodes[0]);
			contenedorTarea.insertBefore(botonAnadir,contenedorTarea.childNodes[1]);
			contenedorTarea.insertBefore(botonCerrar,contenedorTarea.childNodes[2]);
			padre.appendChild(contenedorTarea);

			botonAnadir.addEventListener("click", listaTarea);

			function listaTarea(e){
				e.preventDefault();
				var mensajeTarea = document.createElement("div");
				mensajeTarea.textContent = textareaTarjeta.value;
				textareaTarjeta.value = "";
				mensajeTarea.classList.add("mensajeTarea");

				padre.insertBefore(mensajeTarea,padre.lastElementChild);
			};
		};
	};
});