import { Paciente, Medico } from "./sistema-medico/sistema-medico";

let consulta_1 = new Medico(202, 'Gabriel', 234, 'Alergia');

consulta_1.id_medico = 201; consulta_1.nome_medico = 'Sérgio'; consulta_1.matricula_medico = 456; 
consulta_1.especialidade = 'Alergista'; consulta_1.id_consulta = 16; consulta_1.marcar([consulta_1])
