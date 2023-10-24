export class Paciente implements Consulta{
    id_paciente : number
    nome_paciente : string
    matricula_paciente : number
    doenca : string
    id_consulta: number
    data: string
    marcar(lista_consulta: Object[]): void {
        console.log(lista_consulta)
    }
    constructor(id_paciente: number,   nome_paciente : string,matricula_paciente : number,doenca : string ){
            this.id_paciente = id_paciente;
            this.nome_paciente = nome_paciente;
            this.matricula_paciente = matricula_paciente;
            this.doenca = doenca
        }
};

export class Medico extends Paciente {
    id_medico : number
    nome_medico : string
    matricula_medico : number
    especialidade : string
   

    constructor(id_paciente: number,   nome_paciente : string,matricula_paciente : number,doenca : string ){
        super(id_paciente, nome_paciente, matricula_paciente, doenca)
            this.id_paciente = id_paciente;
            this.nome_paciente = nome_paciente;
            this.matricula_paciente = matricula_paciente;
            this.doenca = doenca
    }
};

interface Consulta{
    id_consulta: number
    data: string
    marcar(lista_consulta: Object[]): void
};


