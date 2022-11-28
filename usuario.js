let Usuario1=new Object;
Usuario1.Nombre="Roger";
Usuario1.Contraseña= 1258;
Usuario1.Email="roger123@gmail.com";

let Usuario2=new Object;
Usuario2.Nombre="Sergio";
Usuario2.Contraseña= 1258;
Usuario2.Email="sergio123@gmail.com";

let Usuario3=new Object;
Usuario3.Nombre="Americo";
Usuario3.Contraseña= 1258;
Usuario3.Email="americo123@gmail.com";



function mensaje(){
    // agarra datos
    var nombreObtneido = document.getElementById("Usuario").value;
    var contraseñaObtneido = document.getElementById("Contraseña").value;
    var emailObtneido = document.getElementById("Email").value;
    
    //creando nuevo objeto a comparar
    let UsuarioReg=new Object;
    UsuarioReg.Nombre=nombreObtneido;
    UsuarioReg.Contraseña=contraseñaObtneido;
    UsuarioReg.Email=emailObtneido;


    alert(nombreObtneido+" "+contraseñaObtneido+" "+emailObtneido);
}

function compara(){
    
    var nombreObtneido = document.getElementById("Usuario").value;
    var contraseñaObtneido = document.getElementById("Contraseña").value;
    var emailObtneido = document.getElementById("Email").value;
    

    var l1=0,l2=0,l3=0, e1=0,e2=0,e3=0;

    if(nombreObtneido==Usuario2.Nombre){
        l1=1;
    }
    else{
        e1=1;
    }
    if(contraseñaObtneido==Usuario2.Contraseña){
        l2=1;
    }
    else{
        e2=1;
    }
    if(emailObtneido==Usuario2.Email){
        l3=1;
    }
    else{
        e3=1;
    }

    //Mensajes de Error

    if(e1==1 && e2==0){
        alert("Compruebe los datos e ingrese nuevamente")
    }
    if(e1==1 && e2==1){
        alert("Compruebe los datos e ingrese nuevamente")
    }
    if(e1==0 && e2==1){
        alert("Compruebe los datos e ingrese nuevamente")
    }

    //Datos correctos
    
    if(l1==1 && l2==1){
        pruebalink();
    }
}

// Verifica si es un formato de email valido no se si meterle
function pruebaemail (){
    var email = document.getElementById("Email").value;
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(email)){
		alert('email no valido');
	}
	else alert('email valido');
}

function pruebalink (){
    location.href="inicio.html";
}


