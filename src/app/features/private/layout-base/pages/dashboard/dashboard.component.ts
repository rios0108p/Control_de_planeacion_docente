import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/shared/model/courses.model';
import { CoursesService } from 'src/app/shared/services/courses/courses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public courses = [{
    year: '2025'},
    {
      year: '2024'
    },
    {
      year: '2023'
    },
    {
      year: '2022'
    }
  ];
  public coursesList: any;

  constructor(private coursesSrv: CoursesService) {}

  ngOnInit(): void {
    this.getListCourses();
  }

  private getListCourses() {
    this.coursesSrv.getCoursesList().subscribe((course: Courses) => {
      if(course) {
        this.coursesList = course;
      }
    })
  }
}
