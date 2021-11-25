import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      you selected department with id={{departmentId}}
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
 public departmentId:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit():void{
    
    this.departmentId=parseInt(this.route.snapshot.paramMap.get('id')||'')
   
  }

}
