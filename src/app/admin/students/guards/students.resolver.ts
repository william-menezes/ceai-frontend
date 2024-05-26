import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { StudentService } from '../../../core/services/student.service';
import { of } from 'rxjs';
import { Student } from '../../../core/models/student';

export const studentsResolver: ResolveFn<Object> = (route, state) => {
  if (route.params && route.params['id']) {
    return inject(StudentService).getStudentById(route.params['id']);
  }

  return of({
    id: '',
    dataMatricula: '',
    dataRematricula: '',
    status: '',
    nome: '',
    sexo: '',
    dataNascimento: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    telefone1: '',
    telefone2: '',
    telefone3: '',
    telefone4: '',
    rg: '',
    orgaoExpedidor: '',
    dataExpedicao: '',
    cpf: '',
    nomeMae: '',
    naturalidade: '',
    nis: '',
    prontuarioSUS: '',
    validadeAtestado: '',
    liberacaoMedica: '',
    alfabetizacao: '',
    atividadeFisica: '',
    capoeira: '',
    celular: '',
    coral: '',
    dancaSalao: '',
    dancaUrbana: '',
    dancaUrbanaMarcelo: '',
    dancaVentre: '',
    fanfarra: '',
    fisioterapia: '',
    geb: '',
    grupoConvivencia: '',
    hidroginastica: '',
    informatica: '',
    musculacao: '',
    odontologia: '',
    projetoSol: '',
    psicologia: '',
    trabalhosManuais: '',
    viola: '',
    violao: '',
    copiaRg: '',
    copiaCpf: '',
    copiaEndereco: '',
    copiaVacina: '',
  });
};
