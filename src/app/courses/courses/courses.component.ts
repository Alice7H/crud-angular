import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Front-end'
    },
    {
      _id: '2',
      name: 'React',
      category: 'Front-end'
    }
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor(){}

  ngOnInit() : void {}
}
