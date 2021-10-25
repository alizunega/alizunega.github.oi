function validarCampos(formulario, archivo) {
  //variables obtienen valores del formulario
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("phone").value;
  var mail = document.getElementById("email").value;
  //creo variable de expresion regular para mail
  var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var msjerror = "";

  extensiones_validas = new Array(".jpg", ".jpeg", ".png", ".svg");
  msjerror = "";

  //verificacion de la extension del archivo
  //primero evalua si hay o no archivo

  if (!archivo) {
    //muestra mensaje que no se ha seleccionado archivo
    //envia el formulario sin archivo (es opcional)
    msjerror = "El formulario se enviará sin archivo de muestra.";
    alert(msjerror);

  } else {
    //recupero la extensión de este nombre de archivo
    extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();

    //compruebo si la extensión está entre las permitidas
    permitida = false;
    for (var una of extensiones_validas) {
      if (una === extension) {
        permitida = true;
        break;
      }
    }
    //evalua que mensaje muestra según la condición
    if (permitida == false) {
      msjerror = "Comprueba la extensión de los archivos a subir. \nSólo se pueden subir archivos con extensiones: " + extensiones_validas.join();
      //muestra el mensaje de error correspondiente
      alert(msjerror);
      //no envia el formulario y sale (en teoria, Marge)
      return 0;

    }
  }

  //verificar si campos vacios
  //si los hay avisa que son obligatorios

  if (nombre === "" && (telefono === null || mail === "")) {
    alert("Hay campos obligatorios vacíos.");
    

    //comprobamos si el email tiene formato correcto

  } else if (!regExp.test(mail)) {
    alert("Ingrese un formato de email válido. \nEjemplo: ejemplo@mail.com");
    

  } else {
    //todo OK
    alert("Su formulario ha sido enviado exitosamente.")
    
    return 1;
  }
return false;

}




