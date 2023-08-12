//Datos PACIENTE
let apellidoP = "";
let nombreP = "";
let documento = "";
let edad = "";
let sexo = "";
let mail = "";
let password = "";


//Datos MEDICO
let apellidoM = "";
let nombreM = "";
let matricula = "";


//Datos ESPECIALIDAD
let codigoEsp = "";
let nombreEso = "";


//Datos TURNO
let fechaTurno = "";
let horaTurno = "";


//Arreglos
let pacientes = [];
let medicos = [];
let especialidades = [];
let turnos = [];


//Variables del Modal
let modal = document.getElementById("modal");
let modalBtnClose = document.getElementById("modal-btn-close");
let modalBtnConfirm = document.getElementById("modal-btn-confirm");
let modalBtnAccept = document.getElementById("modal-btn-accept");
let modalBtnReset = document.getElementById("modal-btn-reset");
let modalBtnCancel = document.getElementById("modal-btn-cancel");
let modalBodyTittle = document.getElementById("modal-body-tittle");
let modalBodyMessage = document.getElementById("modal-body-message");

let modalTittle = "";
let modalMessageHTML = "";


//HANDLERS GLOBALES
//Cerrar Modal
modalBtnClose.addEventListener("click", ()=>{
    modal.classList.remove("show");    
    modal.classList.add("hide");
});


//Expresiones regulares
const regExMay = /[A-Z]/;
const regExMin = /[a-z]/;
const regExNum = /[0-9]/;
const regExEsp = /[^0-9a-zA-Z]/;
const regExMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
