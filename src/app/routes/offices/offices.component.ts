import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  constructor() { 
    console.log("Offices component is created");
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("Component is destroyed");
  }
}
