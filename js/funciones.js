//Confirmar los datos (Opción con alert por cada campo incompleto)
function clicRegistro1(){
}

//Registrar
function registro(){
}

function cancelarRegistro(){
    location.href = "../index.html";
}

// function lanzarModal(titulo, msjHTML) {
//     modalBodyTittle.innerText = titulo;
//     modalBodyMessage.innerHTML = msjHTML;
//     modal.classList.remove("hide");
//     modal.classList.add("show");
// }

function mostrarModal(titulo, msjHTML, deshabilitarBtnClose, ocultarBtnConfirm, ocultarBtnAccept, ocultarBtnReset, ocultarBtnCancel){
    modalBodyTittle.innerText = titulo;
    modalBodyMessage.innerHTML = msjHTML;
    deshabilitarBtnClose && modalBtnClose.setAttribute("disabled", "true");
    ocultarBtnConfirm && modalBtnConfirm.classList.add("hide");
    ocultarBtnAccept && modalBtnAccept.classList.add("hide");
    ocultarBtnReset && modalBtnReset.classList.add("hide");
    ocultarBtnCancel && modalBtnCancel.classList.add("hide");
    modal.classList.replace("hide", "show");
}