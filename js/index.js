//Variable del formulario 
let loginForm = document.getElementById("login-form");
let inputDocumento = document.getElementById("login-input-documento");
let inputDocumentAlert = document.getElementById("alert-input-documento");
let inputPassword = document.getElementById("login-input-password");
let inputPasswordAlert = document.getElementById("alert-input-password");
let passwordEyeLink = document.getElementById("password-eye-link");
let passwordEyeIcon = document.getElementById("password-eye-icon");
let btnIngresar = document.getElementById("btn-ingresar");


//Aceptar Modal - MODIFICAR CON LA LOGICA CORRESPONDIENTE
modalBtnAccept.addEventListener('click', function(){
    limpiarCamposLogin();
    modal.classList.remove("show");
    modal.classList.add("hide");    
})


//Funciones de index.html
function indexFocus(){
    inputDocumento.focus();
}

function mostrarPass(){
    passwordEyeIcon.setAttribute("src", "assets/img/open-eye.svg");
    inputPassword.setAttribute("type", "text");
}

function ocultarPass(){
    passwordEyeIcon.setAttribute("src", "assets/img/closed-eye.svg");
    inputPassword.setAttribute("type", "password");
}

function limpiarCamposLogin(){
    inputDocumento.value = "";
    inputPassword.value = "";
}

function hideAlerts(){
    inputDocumentAlert.classList.remove("visible");
    inputPasswordAlert.classList.remove("visible");
    inputDocumentAlert.classList.add("invisible");
    inputPasswordAlert.classList.add("invisible");
}

function clickLogin(e){
    e.preventDefault();
    hideAlerts();
    let documento = inputDocumento.value;
    let password = inputPassword.value;
    
    if(documento === "" && password !== ""){
        inputDocumentAlert.classList.remove("invisible");
        inputDocumentAlert.classList.add("visible");
    }
    else if(password === "" && documento !== ""){
        inputPasswordAlert.classList.remove("invisible");
        inputPasswordAlert.classList.add("visible");
    }
    else if(password === "" && documento === ""){
        inputDocumentAlert.classList.remove("invisible");
        inputPasswordAlert.classList.remove("invisible");
        inputDocumentAlert.classList.add("visible");
        inputPasswordAlert.classList.add("visible");
    }
    else{
        validarLogin(documento, password);
        return;
    }
}

function validarLogin(doc, pass){

    const enSesion = pacientes.find(
        (elemento) =>{return elemento.documento === doc}
        );
    
    if(enSesion === undefined){
        limpiarCamposLogin();
        modalTittle = "ATENCION";
        modalMessageHTML = `<p class="modal__box__body__message"> El paciente ${doc} no se encuentra registrado</p>`;
        mostrarModal(modalTittle, modalMessageHTML, true, true, false, true, true);
        return false;
    }

    if(enSesion.password === pass){
        const enSesionJSON = JSON.stringify(enSesion);
        sessionStorage.setItem("PacienteActivo", enSesionJSON);
        location.href = "pages/construccion.html";
        //En producción se haría el submit del form        
    }
    else{
        limpiarCamposLogin();
        modalTittle = "ATENCION";
        modalMessageHTML = `<p class="modal__box__body__message"> La contraseña ingresada es incorrecta</p>`;
        mostrarModal(modalTittle, modalMessageHTML, true, true, false, true, true);
    }
}


//Declaración de handlers
passwordEyeIcon.addEventListener("mouseover", mostrarPass);
passwordEyeIcon.addEventListener("mouseout", ocultarPass);
btnIngresar.addEventListener("click", clickLogin);





//COMIENZO DEL PROGRAMA
indexFocus();
