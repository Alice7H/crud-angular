import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
    imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    CoursesComponent,
    CourseFormComponent,
    CourseListComponent,
]
})
export class CoursesModule { }
