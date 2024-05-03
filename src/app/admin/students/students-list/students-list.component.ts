import { Component } from '@angular/core';
import { Student } from '../../../core/models/student';
import { StudentService } from '../../../core/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent {
  students!: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });

    console.log(this.students);
  }
}
