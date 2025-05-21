import { AsyncPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { Observable } from 'rxjs';
import { Address } from '../../../../core/interfaces/address';
import { District } from '../../../../core/interfaces/district';
import { Kinship } from '../../../../core/interfaces/kinship';
import { Student } from '../../../../core/interfaces/student';
import { AddressService } from '../../../../core/services/address.service';
import { StudentService } from '../../../../core/services/student.service';

@Component({
  selector: 'app-students-form',
  standalone: true,
  imports: [
    ButtonModule,
    CalendarModule,
    DialogModule,
    IconFieldModule,
    InputIconModule,
    PanelModule,
    ReactiveFormsModule,
    SelectModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
    TitleCasePipe,
    AsyncPipe,
    UpperCasePipe
  ],
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

    console.log(student);

    student.contatos?.forEach(() => {
      this.adicionarContato();
    });

    this.header = this.route.snapshot.url[0].path;

    this.addressService
      .getDistricts()
      .subscribe((districts) => (this.bairrosOptions = districts));

    this.studentService
      .getKinship()
      .subscribe((kinship) => (this.parentescoContatoOptions = kinship));

    this.studentForm.patchValue(student);
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
