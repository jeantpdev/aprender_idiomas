
// VALIDAR INICIO DE SESIÓN
document.getElementById('botton').onclick = function validarSesion(){
	var correo = document.getElementById('email2');
	var contra = document.getElementById('contrasena2');

	//Variables directas del HTML que mostrarán si existe algún error
	var errorCorreo = document.getElementById('errorEmail');
	var errorContra = document.getElementById('errorPass');
	//Error general
	var errorGeneral = document.getElementById('errorGeneral');

	if  (correo.value == null || correo.value.length == 0 ) {
		errorCorreo.innerHTML = '<h5 class = "CorreoCSS"> Campo vacio idiota</h5>';
		correo.className="form-control is-invalid";
		tiempoEspera(errorCorreo);
	}
	if (contra.value == null || contra.value.length == 0){
		errorContra.innerHTML = '<h5 class = "ContraCSS"> Y la contraseña? care mondá </h5>';
		contra.className= "form-control is-invalid";
		tiempoEspera(errorContra);

		//ACCESO CONCEDIDO
	}else if (correo.value === "usuario" && contra.value == "es3sante"){
		location.href ="../index.html";

	}else{
		errorGeneral.innerHTML = '<h5 class = "ContraCSS"> usuario/contraseña no encontrados </h5>';
		limpiarCampos(correo, contra)
	}

	timer = setInterval(function intervalo(){
			correo.className = "form-control";
			contra.className = "form-control";
			errorGeneral.innerHTML = '<h5 class= "ContraCSS> </h5>'; },3000);
}

//FUNCIONES
							//CUALQUIER NOMBRE
//Borra los campos luego de fallar en el inicio de seión							
function limpiarCampos(correoABorrar, contraABorrar){
	correoABorrar.value = "";
	contraABorrar.value = "";
}

// Elimina contenido de error generado (h5-HTML) después de 4 segundos
var error;
 function tiempoEspera(error){
	setTimeout(function(){error.innerHTML = '<h5></h5>';},3000);
}

//Funciones que no sirven


/* var timer;

function stopInterval (){
	clearInterval (timer);
} */

