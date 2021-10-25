var nombre = document.getElementById(nombre).value;
var mail = document.getElementById(email).value;
var phone = document.getElementById(phone).value;

function validarFormulario(evento){
  var expr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
  if ( !expr.test(mail) ){                                                           
    alert("Error: La dirección de correo " + correo + " es incorrecta.");
    return false;
  }
  
  if(( nombre.lenght== 0 ) || (mail.lenght == 0) || ( phone == null)){
    
    alert("Este campo es obligatorio.");
    return false;

  }else{
    formulario.submi();
    return true;
  }  

}



function comprueba_extension(formulario, archivo) {
  extensiones_validas = new Array(".jpg", ".jpeg", ".png", ".svg");
  msjerror = "";
  if (!archivo) {
     //muestra mensaje si no se seleccionó algun archivo
      msjerror = "No has seleccionado ningún archivo";
  }else{
     //recupero la extensión de este nombre de archivo
     extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
     
     //compruebo si la extensión está entre las permitidas
     permitida = false;
     for(var una of extensiones_validas){
       if (una === extension){
         permitida = true;
         break;
       } 
     }
     /*
     for (var i = 0; i < extensiones_validas.length; i++) {
        if (extensiones_validas[i] == extension) {
        permitida = true;
        break;
        }
     }*/
     if (!permitida) {
        msjerror = "Comprueba la extensión de los archivos a subir. \nSólo se pueden subir archivos con extensiones: " + extensiones_validas.join();
      }else{
         //extension permitida, se envia el formulario
        alert("El formulario se envió con éxito.");
        formulario.submit();
        return 1;
      }
  }
  //muestra el mensaje de error correspondiente
  alert (msjerror);
  return 0;
}




  