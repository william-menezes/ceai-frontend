import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrl: './students-form.component.scss',
})
export class StudentsFormComponent implements OnInit {
  //Necessário para resetar o formulário sem dar erro de validação
  @ViewChild('form')
  form!: NgForm;
  studentForm = this.formBuilder.group({
    id: '',
    dataMatricula: [''],
    dataRematricula: [''],
    status: [''],
    nome: [''],
    sexo: [''],
    dataNascimento: [''],
    endereco: [''],
    numero: [''],
    complemento: [''],
    bairro: [''],
    cep: [''],
    telefone1: [''],
    telefone2: [''],
    telefone3: [''],
    telefone4: [''],
    rg: [''],
    orgaoExpedidor: [''],
    dataExpedicao: [''],
    cpf: [''],
    nomeMae: [''],
    naturalidade: [''],
    nis: [''],
    prontuarioSUS: [''],
    validadeAtestado: [''],
    liberacaoMedica: [''],
    alfabetizacao: [''],
    atividadeFisica: [''],
    capoeira: [''],
    celular: [''],
    coral: [''],
    dancaSalao: [''],
    dancaUrbana: [''],
    dancaUrbanaMarcelo: [''],
    dancaVentre: [''],
    fanfarra: [''],
    fisioterapia: [''],
    geb: [''],
    grupoConvivencia: [''],
    hidroginastica: [''],
    informatica: [''],
    musculacao: [''],
    odontologia: [''],
    projetoSol: [''],
    psicologia: [''],
    trabalhosManuais: [''],
    viola: [''],
    violao: [''],
    copiaRg: [''],
    copiaCpf: [''],
    copiaEndereco: [''],
    copiaVacina: [''],
  });

  sexOptions: any[] = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
  ];

  bairrosOptions: any[] = [
    {
      id: '0',
      bairro: 'ACLIMACAO',
    },
    {
      id: '1',
      bairro: 'ALTO UMUARAMA',
    },
    {
      id: '2',
      bairro: 'ALVORADA',
    },
    {
      id: '3',
      bairro: 'BOM JESUS',
    },
    {
      id: '4',
      bairro: 'BRASIL',
    },
    {
      id: '5',
      bairro: 'CARAJAS',
    },
    {
      id: '6',
      bairro: 'CAZECA',
    },
    {
      id: '7',
      bairro: 'CENTRO',
    },
    {
      id: '8',
      bairro: 'CHACARAS TUBALINA E QUARTEL',
    },
    {
      id: '9',
      bairro: 'CIDADE JARDIM',
    },
    {
      id: '10',
      bairro: 'CUSTODIO PEREIRA',
    },
    {
      id: '11',
      bairro: 'DANIEL FONSECA',
    },
    {
      id: '12',
      bairro: 'DISTRITO INDUSTRIAL',
    },
    {
      id: '13',
      bairro: 'DONA ZULMIRA',
    },
    {
      id: '14',
      bairro: 'FUNDINHO',
    },
    {
      id: '15',
      bairro: 'GAVEA',
    },
    {
      id: '16',
      bairro: 'GRANADA',
    },
    {
      id: '17',
      bairro: 'GRAND VILLE',
    },
    {
      id: '18',
      bairro: 'GRANJA MARILEUSA',
    },
    {
      id: '19',
      bairro: 'GUARANI',
    },
    {
      id: '20',
      bairro: 'JARAGUA',
    },
    {
      id: '21',
      bairro: 'JARDIM BRASILIA',
    },
    {
      id: '22',
      bairro: 'JARDIM CANAA',
    },
    {
      id: '23',
      bairro: 'JARDIM DAS PALMEIRAS',
    },
    {
      id: '24',
      bairro: 'JARDIM EUROPA',
    },
    {
      id: '25',
      bairro: 'JARDIM HOLANDA',
    },
    {
      id: '26',
      bairro: 'JARDIM INCONFIDENCIA',
    },
    {
      id: '27',
      bairro: 'JARDIM IPANEMA',
    },
    {
      id: '28',
      bairro: 'JARDIM KARAIBA',
    },
    {
      id: '29',
      bairro: 'JARDIM PATRICIA',
    },
    {
      id: '30',
      bairro: 'JARDIM SUL',
    },
    {
      id: '31',
      bairro: 'LAGOINHA',
    },
    {
      id: '32',
      bairro: 'LARANJEIRAS',
    },
    {
      id: '33',
      bairro: 'LIDICE',
    },
    {
      id: '34',
      bairro: 'LUIZOTE DE FREITAS',
    },
    {
      id: '35',
      bairro: 'MANSOUR',
    },
    {
      id: '36',
      bairro: 'MARAVILHA',
    },
    {
      id: '37',
      bairro: 'MARTA HELENA',
    },
    {
      id: '38',
      bairro: 'MARTINS',
    },
    {
      id: '39',
      bairro: 'MINAS GERAIS',
    },
    {
      id: '40',
      bairro: 'MORADA DA COLINA',
    },
    {
      id: '41',
      bairro: 'MORADA DO SOL',
    },
    {
      id: '42',
      bairro: 'MORADA DOS PASSAROS',
    },
    {
      id: '43',
      bairro: 'MORUMBI',
    },
    {
      id: '44',
      bairro: 'NOSSA SENHORA APARECIDA',
    },
    {
      id: '45',
      bairro: 'NOSSA SENHORA DAS GRACAS',
    },
    {
      id: '46',
      bairro: 'NOVO MUNDO',
    },
    {
      id: '47',
      bairro: 'NOVA UBERLANDIA',
    },
    {
      id: '48',
      bairro: 'OSVALDO REZENDE',
    },
    {
      id: '49',
      bairro: 'PACAEMBU',
    },
    {
      id: '50',
      bairro: 'PAMPULHA',
    },
    {
      id: '51',
      bairro: 'PANORAMA',
    },
    {
      id: '52',
      bairro: 'PATRIMONIO',
    },
    {
      id: '53',
      bairro: 'PEQUIS',
    },
    {
      id: '54',
      bairro: 'PLANALTO',
    },
    {
      id: '55',
      bairro: 'PORTAL DO VALE',
    },
    {
      id: '56',
      bairro: 'PRESIDENTE ROOSEVELT',
    },
    {
      id: '57',
      bairro: 'RESIDENCIAL GRAMADO',
    },
    {
      id: '58',
      bairro: 'RESIDENCIAL INTEGRACAO',
    },
    {
      id: '59',
      bairro: 'SANTA LUZIA',
    },
    {
      id: '60',
      bairro: 'SANTA MONICA',
    },
    {
      id: '61',
      bairro: 'SANTA ROSA',
    },
    {
      id: '62',
      bairro: 'SAO JORGE',
    },
    {
      id: '63',
      bairro: 'SAO JOSE',
    },
    {
      id: '64',
      bairro: 'SARAIVA',
    },
    {
      id: '65',
      bairro: 'SEGISMUNDO PEREIRA',
    },
    {
      id: '66',
      bairro: 'SHOPPING PARK',
    },
    {
      id: '67',
      bairro: 'TABAJARAS',
    },
    {
      id: '68',
      bairro: 'TAIAMAN',
    },
    {
      id: '69',
      bairro: 'TIBERY',
    },
    {
      id: '70',
      bairro: 'TOCANTINS',
    },
    {
      id: '71',
      bairro: 'TUBALINA',
    },
    {
      id: '72',
      bairro: 'UMUARAMA',
    },
    {
      id: '73',
      bairro: 'VIGILATO PEREIRA',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  voltar() {
    this.router.navigate(['./alunos'], { relativeTo: this.route });
  }

  onSubmit() {
    console.log(this.studentForm.value);
  }
}
