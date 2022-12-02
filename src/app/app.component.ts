import { Component } from '@angular/core';
import { Student } from './Models/student.model';
import { StudentService } from './Services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students!: Student[];

  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'age', 'career'];


  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.list(1, 50).subscribe((x: any) => {
      this.students = x;
    }, error => { console.log(error.error) });
  }

}
