import { Component } from '@angular/core';
import { Column } from '../../../core/models/column';
import { Student } from '../../../core/models/student';
import { StudentService } from '../../../core/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent {
  students!: Student[];
  cols!: Column[];
  statuses!: any[];
  loading: boolean = true;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;

      this.loading = false;
    });

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'sexo', header: 'Sexo' },
      { field: 'dataNascimento', header: 'Data de nascimento' },
      { field: 'status', header: 'Status' },
      { field: 'rg', header: 'RG' },
      { field: 'cpf', header: 'CPF' },
      { field: 'nomeMae', header: 'Mãe' },
      { field: 'naturalidade', header: 'Naturalidade' },
    ];

    this.statuses = [
      { label: 'ATIVO', value: 'ATIVO' },
      { label: 'INATIVO', value: 'INATIVO' },
      { label: 'TRANSFERENCIA', value: 'TRANSFERENCIA' },
      { label: 'OBITO', value: 'OBITO' },
      { label: 'NAO RENOVOU', value: 'NAO RENOVOU' },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'ATIVO':
        return 'success';

      case 'INATIVO':
        return 'danger';

      case 'NAO RENOVOU':
        return 'info';

      case 'TRANSFERENCIA':
      case 'DESISTENTE':
      case 'OBITO':
      default:
        return 'warning';
    }
  }

  newStudent() {
    this.router.navigate(['novo-aluno'], { relativeTo: this.route });
  }
}
