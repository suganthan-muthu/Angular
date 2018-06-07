import { Injectable } from '@angular/core';
import {course} from '../course';

@Injectable()
export class CourseService {
private courses:course[];

  constructor() { 
    this.courses=[
      {
        name:"Angular 4",
        image:"angular4.png",
        description : "Google's single page app framework",
        price :22000
      },
      {
        name:"ASP.net",
        image:"asp.png",
        description : "Dot Net language for server pages",
        price :20000
      },
      {
        name:"BIGDATA",
        image:"bigdata.png",
        description : "Ecosystem for BIGDATA",
        price :10000
      },
      {
        name:"Jquery",
        image:"jquery.png",
        description : "open source javascript library",
        price :15000
      },
      {
        name:"SQL",
        image:"sql.png",
        description : "Common standard to intract with RDBMS",
        price :10000
      },
      {
        name:"Redhat",
        image:"redhat.png",
        description : "Enterprise grade linex OS",
        price :19000
      }
    ]
  }

  getCourses():course[]{
    return this.courses;
  }
}
