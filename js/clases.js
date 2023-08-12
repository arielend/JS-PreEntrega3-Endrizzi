class Paciente {
    constructor (apellido, nombre, documento, edad, sexo, mail, password){
        this.apellido = apellido,
        this.nombre = nombre,
        this.documento = documento,
        this.edad = edad,
        this.sexo = sexo,
        this.mail = mail,
        this.password = password
    }
}

class Especialidad{
    constructor(codigo, nombreEspecialidad){
        this.codigo = codigo,
        this.nombreEspecialidad = nombreEspecialidad
    }
}

class Medico{
    constructor(apellido, nombres, matricula, especialidad){
        this.apellido = apellido,
        this.nombres = nombres,
        this.matricula = matricula,
        this.especialidad = especialidad
    }
}

class Turno{
    constructor(paciente, especialidad, medico, fechaTurno, horaTurno, cancelado){
        this.paciente = paciente,
        this.especialidad = especialidad,
        this.medico = medico,
        this.fechaTurno = fechaTurno,
        this.horaTurno = horaTurno,
        this.cancelado = false
    }
}