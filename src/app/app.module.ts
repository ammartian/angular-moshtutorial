import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { LecturersComponent } from './lecturers/lecturers.component';
import { StudentsComponent } from './students/students.component';
import { TwiceComponent } from './twice/twice.component';
import { CatsComponent } from './cats/cats.component';
import { IdolsComponent } from './idols/idols.component';
import { FrameworksComponent } from './frameworks/frameworks.component';

// TODO: STEP 2: IMPORT COMPONENT IN MODULE

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    LecturersComponent,
    StudentsComponent,
    TwiceComponent,
    CatsComponent,
    IdolsComponent,
    FrameworksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
