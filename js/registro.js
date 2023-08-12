//DECLARACIÓN DE VARIABLES
//Elementos del formulario
let form = document.getElementById("register-form");
let inputApellido = document.getElementById("register-input-apellido");
let inputNombres = document.getElementById("register-input-nombres");
let inputDocumento = document.getElementById("register-input-documento");
let inputEdad = document.getElementById("register-input-edad");
let selectSexo = document.getElementById("register-select-sexo");
let inputMail = document.getElementById("register-input-mail"); 
let inputMailConfirm = document.getElementById("register-input-mailConfirm"); 
let inputPassword = document.getElementById("register-input-password");
let inputPasswordConfirm = document.getElementById("register-input-passwordConfirm");

let alertMail = document.getElementById("alert-mail");
let alertMailConfirm = document.getElementById("alert-mailConfirm");
let alertPassword = document.getElementById("alert-password");
let alertPasswordConfirm = document.getElementById("alert-passwordConfirm");

let btnRegistrar = document.getElementById("btn-registrar");
let btnBorrar = document.getElementById("btn-borrar");
let btnCancelar = document.getElementById("btn-cancelar");

//DECLARACION DE FUNCIONES
function clicRegistro(e){
    e.preventDefault();
    
    apellido = (inputApellido.value).trim();
    nombres = (inputNombres.value).trim();
    documento = inputDocumento.value;
    edad = inputEdad.value;
    sexo = selectSexo.options[selectSexo.selectedIndex].value;
    mail = (inputMail.value).trim();
    let mailConfirm = inputMailConfirm.value;
    password = inputPassword.value;
    let passwordConfirm = inputPasswordConfirm.value;

    let campos = [apellido, nombres, documento, edad, sexo, mail, mailConfirm, password, passwordConfirm];
    verificarCampos(campos);    
    }

function verificarCampos(camp){
    
    let camposCompletos = camp.filter((x)=> x !== "");
    let cantCamposRequeridos = 9;
    let cantCamposCompletos = camposCompletos.length;    

    if(cantCamposRequeridos === cantCamposCompletos){
        (compararMail && compararPassword) && verificarUsuarioDuplicado();
    }
    else{
        mostrarCamposIncompletos(camp);        
    }
}

function mostrarCamposIncompletos(camp){
    let [apellido, nombres, documento, edad, sexo, mail, mailConfirm, password, passwordConfirm] = camp;

    modalBtnAccept.addEventListener("click", ()=>{modal.classList.replace("show", "hide")});
    let modalTittle = "Los siguientes campos son obligatorios:";
    let modalMessageHTML = "";
    
    apellido === "" && (modalMessageHTML += "<span> Apellido.</span>");
    nombres === "" && (modalMessageHTML += "<span> Nombres. </span>");
    documento === "" && (modalMessageHTML += "<span> Documento.</span>");
    edad === "" && (modalMessageHTML += "<span> Edad.</span>");
    sexo === "" && (modalMessageHTML += "<span> Sexo.</span>");
    mail === "" && (modalMessageHTML += "<span> Email.</span>");
    mailConfirm === "" && (modalMessageHTML += "<span> Confirmar Email.</span>");
    password === "" && (modalMessageHTML += "<span> Password.</span>");
    passwordConfirm === "" && (modalMessageHTML += "<span> Confirmar Password.</span>");
    
    mostrarModal(modalTittle, modalMessageHTML, true, true, false, true, true);
}

function registroFocus(){
    inputApellido.focus();
}

function checkMailFormat(){
    let email = inputMail.value;
    if(!regExMail.test(email)){
        alertMail.classList.contains("invisible") && alertMail.classList.replace("invisible", "visible");
        return true;
    }
    else{
        alertMail.classList.replace("visible", "invisible");
    }
}

function compararMail(){
    let email = inputMail.value;
    let emailConfirm = inputMailConfirm.value;

    if(email === emailConfirm){
        alertMailConfirm.classList.contains("visible") && alertMailConfirm.classList.replace("visible", "invisible");
        return true;
    }
    else{
        alertMailConfirm.classList.replace("invisible", "visible");
    }    
}

function testPasswordStrenght(pw){
    let puntaje = 0;

    regExMay.test(pw) && puntaje++;
    regExMin.test(pw) && puntaje++;
    regExNum.test(pw) && puntaje++;
    regExEsp.test(pw) && puntaje++;

    return puntaje;    
}

function showPasswordStrenght(){
    let pass = inputPassword.value;
    let pwStrenght = testPasswordStrenght(pass);

    if(pass.length !== 0){
        switch(pwStrenght){
            case 0:
                alertPassword.classList.contains("pass-medium") && alertPassword.classList.remove("pass-medium");
                alertPassword.classList.contains("pass-strong") && alertPassword.classList.remove("pass-strong");
                alertPassword.classList.add("pass-weak");
                break;

            case 1:
                alertPassword.classList.contains("pass-medium") && alertPassword.classList.remove("pass-medium");
                alertPassword.classList.contains("pass-strong") && alertPassword.classList.remove("pass-strong");
                alertPassword.classList.add("pass-weak");
                break;

            case 2:
                alertPassword.classList.contains("pass-weak") && alertPassword.classList.remove("pass-weak");
                alertPassword.classList.contains("pass-strong") && alertPassword.classList.remove("pass-strong");
                alertPassword.classList.add("pass-medium");
                break;

            case 3:
                alertPassword.classList.contains("pass-weak") && alertPassword.classList.remove("pass-weak");
                alertPassword.classList.contains("pass-strong") && alertPassword.classList.remove("pass-strong");
                alertPassword.classList.add("pass-medium");
                break;

            case 4:
                alertPassword.classList.contains("pass-weak") && alertPassword.classList.remove("pass-weak");
                alertPassword.classList.contains("pass-medium") && alertPassword.classList.remove("pass-medium");
                alertPassword.classList.add("pass-strong");
                break;
        }
    }
    else{
        alertPassword.classList.contains("pass-weak") && alertPassword.classList.remove("pass-weak");
        alertPassword.classList.contains("pass-medium") && alertPassword.classList.remove("pass-medium");
        alertPassword.classList.contains("pass-strong") && alertPassword.classList.remove("pass-strong");
        return false;
    }
}

function compararPassword(){
    let pass = inputPassword.value;
    let passConfirm = inputPasswordConfirm.value;
    
    if(pass === passConfirm){
        alertPasswordConfirm.classList.contains("visible") && alertPasswordConfirm.classList.replace("visible", "invisible");
        return true;
    }
    else{
        alertPasswordConfirm.classList.replace("invisible", "visible");
    }
}

function verificarUsuarioDuplicado(){
    const usuariosRegistrados = JSON.parse(localStorage.getItem("pacientes"));
    let doc = inputDocumento.value;
    if(usuariosRegistrados.some((el) => el.documento === doc)){
        let modalTittle = "ATENCIÓN";
        let modalMessageHTML = `El usuario ${doc} ya se encuentra registrado.`;
        mostrarModal(modalTittle, modalMessageHTML, true, true, false, true, true);
        limpiarCamposRegistro();
    }
    else{
        registrarNuevoPaciente();
    }
}

function limpiarCamposRegistro(){
    inputApellido.value = "";
    inputNombres.value = "";
    inputDocumento.value = "";
    inputEdad.value = "";
    selectSexo.selectedIndex = 0;
    inputMail.value = "";
    inputMailConfirm.value = "";
    inputPassword.value = "";
    inputPasswordConfirm.value = "";
    alertPassword.classList.remove("pass-weak", "pass-medium", "pass-strong");
}

function registrarNuevoPaciente(){
    let apellido = inputApellido.value;
    let nombres = inputNombres.value;
    let documento = inputDocumento.value;
    let edad = inputEdad.value;
    let sexo = selectSexo.options[selectSexo.selectedIndex].value;
    let mail = inputMail.value;
    let password = inputPassword.value;

    const nuevoPaciente = new Paciente(apellido, nombres, documento, edad, sexo, mail, password);
    console.log(nuevoPaciente);

    const pacientes = JSON.parse(localStorage.getItem("pacientes"));
    console.log(pacientes);

    pacientes.push(nuevoPaciente);
    console.log(pacientes);

    const pacientesJSON = JSON.stringify(pacientes);
    console.log(pacientesJSON);

    localStorage.setItem("pacientes", pacientesJSON);

    let modalTittle = "Alta Exitosa";
    let modalMessageHTML = `<p>El paciente ${documento} fue registrado de manera exitosa.</>`;
    modalBtnConfirm.addEventListener("click", ()=>{location.href = "../index.html"});
    mostrarModal(modalTittle, modalMessageHTML, true, false, true, true, true);
}

//DECLARACION DE HANDLERS
inputMail.addEventListener("change", checkMailFormat);
inputMailConfirm.addEventListener("input", compararMail);
inputPassword.addEventListener("input", showPasswordStrenght);
inputPasswordConfirm.addEventListener("input", compararPassword);

modalBtnAccept.addEventListener("click", ()=>{modal.classList.replace("show", "hide");});

btnRegistrar.addEventListener("click", clicRegistro);
btnCancelar.addEventListener("click", cancelarRegistro);
btnBorrar.addEventListener("click", function(){
    registroFocus();
} );


registroFocus();
