import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form = this.formBuilder.group({
    _id: [''],
    name: ['', [
      Validators.required,Validators.minLength(5),
      Validators.maxLength(100)]
    ],
    category: ['', [Validators.required]]
  });

  constructor(
    private formBuilder : NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
    ) {
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe({
        next: () => this.onSuccess(),
        error: () => this.onError()
      });
  }

  onCancel(){
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso', '', { duration: 3000});
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 3000});
    this.onCancel();
  }

}
