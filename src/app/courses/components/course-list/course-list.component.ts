import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  readonly displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(){}

  onAdd() {
    this.add.emit(true);
  }
}
