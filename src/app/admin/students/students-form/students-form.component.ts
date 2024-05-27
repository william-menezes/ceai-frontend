import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormArray,
  FormBuilder,
  FormGroup,
  NgForm,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../../../core/services/address.service';
import { Address } from '../../../core/models/address';
import { Student } from '../../../core/models/student';
import { Observable } from 'rxjs';

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
    id: [''],
    dataMatricula: [''],
    dataRematricula: [''],
    status: [''],
    nome: [''],
    sexo: [''],
    dataNascimento: [''],
    endereco: [''],
    numero: [''],
    bairro: [''],
    complemento: [''],
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
    copiaRg: '',
    copiaCpf: [''],
    copiaEndereco: [''],
    copiaVacina: [''],
    contatos: this.formBuilder.array([]),
  });

  sexOptions: any[] = [
    { id: 0, value: 'M' },
    { id: 1, value: 'F' },
  ];

  bairrosOptions: any[] = [
    {
      id: '0',
      value: 'ACLIMACAO',
    },
    {
      id: '1',
      value: 'ALTO UMUARAMA',
    },
    {
      id: '2',
      value: 'ALVORADA',
    },
    {
      id: '3',
      value: 'BOM JESUS',
    },
    {
      id: '4',
      value: 'BRASIL',
    },
    {
      id: '5',
      value: 'CARAJAS',
    },
    {
      id: '6',
      value: 'CAZECA',
    },
    {
      id: '7',
      value: 'CENTRO',
    },
    {
      id: '8',
      value: 'CHACARAS TUBALINA E QUARTEL',
    },
    {
      id: '9',
      value: 'CIDADE JARDIM',
    },
    {
      id: '10',
      value: 'CUSTODIO PEREIRA',
    },
    {
      id: '11',
      value: 'DANIEL FONSECA',
    },
    {
      id: '12',
      value: 'DISTRITO INDUSTRIAL',
    },
    {
      id: '13',
      value: 'DONA ZULMIRA',
    },
    {
      id: '14',
      value: 'FUNDINHO',
    },
    {
      id: '15',
      value: 'GAVEA',
    },
    {
      id: '16',
      value: 'GRANADA',
    },
    {
      id: '17',
      value: 'GRAND VILLE',
    },
    {
      id: '18',
      value: 'GRANJA MARILEUSA',
    },
    {
      id: '19',
      value: 'GUARANI',
    },
    {
      id: '20',
      value: 'JARAGUA',
    },
    {
      id: '21',
      value: 'JARDIM BRASILIA',
    },
    {
      id: '22',
      value: 'JARDIM CANAA',
    },
    {
      id: '23',
      value: 'JARDIM DAS PALMEIRAS',
    },
    {
      id: '24',
      value: 'JARDIM EUROPA',
    },
    {
      id: '25',
      value: 'JARDIM HOLANDA',
    },
    {
      id: '26',
      value: 'JARDIM INCONFIDENCIA',
    },
    {
      id: '27',
      value: 'JARDIM IPANEMA',
    },
    {
      id: '28',
      value: 'JARDIM KARAIBA',
    },
    {
      id: '29',
      value: 'JARDIM PATRICIA',
    },
    {
      id: '30',
      value: 'JARDIM SUL',
    },
    {
      id: '31',
      value: 'LAGOINHA',
    },
    {
      id: '32',
      value: 'LARANJEIRAS',
    },
    {
      id: '33',
      value: 'LIDICE',
    },
    {
      id: '34',
      value: 'LUIZOTE DE FREITAS',
    },
    {
      id: '35',
      value: 'MANSOUR',
    },
    {
      id: '36',
      value: 'MARAVILHA',
    },
    {
      id: '37',
      value: 'MARTA HELENA',
    },
    {
      id: '38',
      value: 'MARTINS',
    },
    {
      id: '39',
      value: 'MINAS GERAIS',
    },
    {
      id: '40',
      value: 'MORADA DA COLINA',
    },
    {
      id: '41',
      value: 'MORADA DO SOL',
    },
    {
      id: '42',
      value: 'MORADA DOS PASSAROS',
    },
    {
      id: '43',
      value: 'MORUMBI',
    },
    {
      id: '44',
      value: 'NOSSA SENHORA APARECIDA',
    },
    {
      id: '45',
      value: 'NOSSA SENHORA DAS GRACAS',
    },
    {
      id: '46',
      value: 'NOVO MUNDO',
    },
    {
      id: '47',
      value: 'NOVA UBERLANDIA',
    },
    {
      id: '48',
      value: 'OSVALDO REZENDE',
    },
    {
      id: '49',
      value: 'PACAEMBU',
    },
    {
      id: '50',
      value: 'PAMPULHA',
    },
    {
      id: '51',
      value: 'PANORAMA',
    },
    {
      id: '52',
      value: 'PATRIMONIO',
    },
    {
      id: '53',
      value: 'PEQUIS',
    },
    {
      id: '54',
      value: 'PLANALTO',
    },
    {
      id: '55',
      value: 'PORTAL DO VALE',
    },
    {
      id: '56',
      value: 'PRESIDENTE ROOSEVELT',
    },
    {
      id: '57',
      value: 'RESIDENCIAL GRAMADO',
    },
    {
      id: '58',
      value: 'RESIDENCIAL INTEGRACAO',
    },
    {
      id: '59',
      value: 'SANTA LUZIA',
    },
    {
      id: '60',
      value: 'SANTA MONICA',
    },
    {
      id: '61',
      value: 'SANTA ROSA',
    },
    {
      id: '62',
      value: 'SAO JORGE',
    },
    {
      id: '63',
      value: 'SAO JOSE',
    },
    {
      id: '64',
      value: 'SARAIVA',
    },
    {
      id: '65',
      value: 'SEGISMUNDO PEREIRA',
    },
    {
      id: '66',
      value: 'SHOPPING PARK',
    },
    {
      id: '67',
      value: 'TABAJARAS',
    },
    {
      id: '68',
      value: 'TAIAMAN',
    },
    {
      id: '69',
      value: 'TIBERY',
    },
    {
      id: '70',
      value: 'TOCANTINS',
    },
    {
      id: '71',
      value: 'TUBALINA',
    },
    {
      id: '72',
      value: 'UMUARAMA',
    },
    {
      id: '73',
      value: 'VIGILATO PEREIRA',
    },
  ];

  parentescoContatoOptions: any[] = [
    { id: 0, value: 'PESSOAL' },
    { id: 1, value: 'CONJUGE' },
    { id: 2, value: 'FILHO(A)' },
    { id: 3, value: 'PAI' },
    { id: 4, value: 'MAE' },
    { id: 5, value: 'IRMA(O)' },
    { id: 6, value: 'PRIMO(A)' },
    { id: 7, value: 'TIO(A)' },
    { id: 8, value: 'SOBRINHO(A)' },
    { id: 9, value: 'NETO(A)' },
    { id: 10, value: 'BISNETO(A)' },
    { id: 11, value: 'VIZINHO(A)' },
  ];
  header: string = '';
  modalVisible: boolean = false;
  street = new FormControl('');
  streetResults$: Observable<Address[]> | null = null;
  selectedAddress!: Address;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    const student: Student = this.route.snapshot.data['student'];
    this.header = this.route.snapshot.url[0].path;

    this.studentForm.setValue({
      id: student.id,
      dataMatricula: student.dataMatricula,
      dataRematricula: student.dataRematricula,
      status: student.status,
      nome: student.nome,
      sexo: student.sexo,
      dataNascimento: student.dataNascimento,
      endereco: student.endereco,
      numero: student.numero,
      bairro: student.bairro,
      complemento: student.complemento,
      cep: student.cep,
      telefone1: student.telefone1,
      telefone2: student.telefone2,
      telefone3: student.telefone3,
      telefone4: student.telefone4,
      rg: student.rg,
      orgaoExpedidor: student.orgaoExpedidor,
      dataExpedicao: student.dataExpedicao,
      cpf: student.cpf,
      nomeMae: student.nomeMae,
      naturalidade: student.naturalidade,
      nis: student.nis,
      prontuarioSUS: student.prontuarioSUS,
      validadeAtestado: student.validadeAtestado,
      liberacaoMedica: student.liberacaoMedica,
      alfabetizacao: student.alfabetizacao,
      atividadeFisica: student.atividadeFisica,
      capoeira: student.capoeira,
      celular: student.celular,
      coral: student.coral,
      dancaSalao: student.dancaSalao,
      dancaUrbana: student.dancaUrbana,
      dancaUrbanaMarcelo: student.dancaUrbanaMarcelo,
      dancaVentre: student.dancaVentre,
      fanfarra: student.fanfarra,
      fisioterapia: student.fisioterapia,
      geb: student.geb,
      grupoConvivencia: student.grupoConvivencia,
      hidroginastica: student.hidroginastica,
      informatica: student.informatica,
      musculacao: student.musculacao,
      odontologia: student.odontologia,
      projetoSol: student.projetoSol,
      psicologia: student.psicologia,
      trabalhosManuais: student.trabalhosManuais,
      viola: student.viola,
      violao: student.violao,
      copiaRg: student.copiaRg,
      copiaCpf: student.copiaCpf,
      copiaEndereco: student.copiaEndereco,
      copiaVacina: student.copiaVacina,
      contatos: [],
    });
  }

  voltar() {
    this.router.navigate(['./alunos'], { relativeTo: this.route });
  }

  onSubmit() {
    console.log(this.studentForm.value);
  }

  contatos(): FormArray {
    return this.studentForm.get('contatos') as FormArray;
  }

  novoContato(): FormGroup {
    return this.formBuilder.group({
      contato: [''],
      responsavel: [''],
      parentesco: [''],
    });
  }

  adicionarContato() {
    this.contatos().push(this.novoContato());
  }

  removerContato(id: number) {
    this.contatos().removeAt(id);
  }

  public get width() {
    return window.innerWidth;
  }

  getAddress() {
    const cep = this.studentForm.get('cep')?.value?.replace(/\D/g, '') || '';

    if (cep) {
      this.addressService.getAddress(cep).subscribe((address) => {
        this.populateAddress(address);
      });
    }
  }

  populateAddress(address: Address) {
    this.studentForm.patchValue({
      endereco: this.formatString(address.logradouro),
      bairro: this.formatString(address.bairro),
    });
  }

  formatString(input: string): string {
    const accentsMap: { [key: string]: string } = {
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
      à: 'a',
      è: 'e',
      ì: 'i',
      ò: 'o',
      ù: 'u',
      ã: 'a',
      ẽ: 'e',
      ĩ: 'i',
      õ: 'o',
      ũ: 'u',
      â: 'a',
      ê: 'e',
      î: 'i',
      ô: 'o',
      û: 'u',
      ç: 'c',
      Á: 'A',
      É: 'E',
      Í: 'I',
      Ó: 'O',
      Ú: 'U',
      À: 'A',
      È: 'E',
      Ì: 'I',
      Ò: 'O',
      Ù: 'U',
      Ã: 'A',
      Ẽ: 'E',
      Ĩ: 'I',
      Õ: 'O',
      Ũ: 'U',
      Â: 'A',
      Ê: 'E',
      Î: 'I',
      Ô: 'O',
      Û: 'U',
      Ç: 'C',
    };

    return input
      .replace(/[^\u0000-\u007E]/g, (char) => {
        return accentsMap[char] || char;
      })
      .toUpperCase();
  }

  showModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.street.setValue('');
    this.streetResults$ = null;
    this.modalVisible = false;
  }

  searchFullAddress() {
    const street = this.street.value;

    if (street) {
      this.streetResults$ = this.addressService.getByStreet(street).pipe();
      //console.log(this.addressService.getByStreet(street).subscribe());
    }
  }

  selectAddress(e: any) {
    console.log(e);
  }
}
