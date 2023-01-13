// VARIABLES A USAR 	
	var nombreModal = document.getElementById('nombre-modal');
	var apellidoModal = document.getElementById('apellido-modal');
	var correoModal = document.getElementById('email-modal');
	var contraModal = document.getElementById('contrasena-modal');
	var confirmContraModal = document.getElementById('contra-confirm-modal');
	var textos  = [nombreModal.value, apellidoModal.value, correoModal.value, contraModal.value, confirmContraModal.value]; //Toma lo escrito de cada campo

	var textos2 = [nombreModal, apellidoModal, correoModal, contraModal, confirmContraModal]; //Toma el campo HTML


document.getElementById('button-Modal').onclick = function(){
	var errorVerificacion = document.getElementById('mensajeVerificacion');

	//Para VALORES(variable creada por FOR) de textos(ARRAY QUE TOMA VALOR DE CAMPOS)
	
	for (var valor of textos) {
		if  (valor.length == 0) {
			//Otro for para modificar la clase de los INPUT de BOOTSTRAP -Los coloca de color rojo

			for (elemento of textos2){
				elemento.className = "form-control is-invalid";
				}
			errorVerificacion.innerHTML = '<h5 class = "mensajeCSS"> Faltan campos por completar</h5>';
			timer(errorVerificacion);

			}

		}

	setInterval(function(){
		nombreModal.className = "form-control";
		apellidoModal.className = "form-control";
		correoModal.className = "form-control";
		contraModal.className = "form-control";
		confirmContraModal.className = "form-control"; 
	},3000);

	}

var error; //variable que va a almacenar lo que se manda a la funcion

timer = function tiempoEspera(error){
	setTimeout(function(){error.innerHTML = '<h5></h5>';},3000);
	//			Agrega el HTML creado desde javascript || milisegundos 3000(3segundos)
}
