const pacienteDefault = new Paciente("Pérez", "Juan Carlos", "22222222", "54", "M", "perezjuan@gmail.com", "1234");
pacientes.push(pacienteDefault);

const especialidad1 = new Especialidad("E001", "Clínica médica");
const especialidad2 = new Especialidad("E002", "Endocrinología");
const especialidad3 = new Especialidad("E003", "Ginecología");
const especialidad4 = new Especialidad("E004", "Oftalmología");
const especialidad5 = new Especialidad("E005", "Ortopedia");
const especialidad6 = new Especialidad("E006", "Pediatría");

especialidades.push(especialidad1, especialidad2, especialidad3, especialidad4, especialidad5, especialidad6);

const medico1 = new Medico("López", "Juan Carlos", "MP 23456", especialidades[0].nombreEspecialidad);
const medico2 = new Medico("Martínez", "César Alfredo", "MP 21659", especialidades[1].nombreEspecialidad);
const medico3 = new Medico("Sánchez", "José Sebastián", "MP 24351", especialidades[2].nombreEspecialidad);
const medico4 = new Medico("Osorio", "María Ines", "MP 21074", especialidades[3].nombreEspecialidad);
const medico5 = new Medico("Ibáñez", "Margarita", "MP 18744", especialidades[4].nombreEspecialidad);
const medico6 = new Medico("Lagos", "María Eugenia", "MP 26339", especialidades[5].nombreEspecialidad);

medicos.push(medico1, medico2, medico3, medico4, medico5, medico6);

const medicosJSON = JSON.stringify(medicos);
const pacientesJSON = JSON.stringify(pacientes);
const turnosJSON = JSON.stringify(turnos);
const especialidadesJSON = JSON.stringify(especialidades);

localStorage.setItem("medicos", medicosJSON);
localStorage.setItem("especialidades", especialidadesJSON);

localStorage.getItem("pacientes") ? pacientes = JSON.parse(localStorage.getItem("pacientes")) : localStorage.setItem("pacientes", pacientesJSON);
localStorage.getItem("turnos") ? turnos = JSON.parse(localStorage.getItem("turnos")) : localStorage.setItem("turnos", turnosJSON);
