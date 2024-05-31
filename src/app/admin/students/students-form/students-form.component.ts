import { StudentService } from './../../../core/services/student.service';
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
import { District } from '../../../core/models/district';
import { Kinship } from '../../../core/models/kinship';
import { Contact } from '../../../core/models/contact';

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

  street = new FormControl('');
  streetResults$: Observable<Address[]> | null = null;
  selectedAddress!: Address;

  sexOptions: any[] = [
    { id: 0, value: 'M', label: 'MASCULINO' },
    { id: 1, value: 'F', label: 'FEMININO' },
  ];
  bairrosOptions: District[] = [];
  parentescoContatoOptions: Kinship[] = [];

  header: string = '';
  modalVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const student: Student = this.route.snapshot.data['student'];

    this.header = this.route.snapshot.url[0].path;

    this.addressService
      .getDistricts()
      .subscribe((districts) => (this.bairrosOptions = districts));

    this.studentService
      .getKinship()
      .subscribe((kinship) => (this.parentescoContatoOptions = kinship));

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
      cep: this.formatString(address.cep),
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

  selectAddress(address: Address) {
    this.populateAddress(address);
    this.closeModal();
  }
}
