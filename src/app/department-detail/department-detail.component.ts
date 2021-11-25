import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      you selected department with id={{departmentId}}
    </p>
    <a (click)="goPrevious()">previous</a>
    <a (click)="goNext()">next</a>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
 public departmentId:any
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit():void{
    //this.departmentId=parseInt(this.route.snapshot.paramMap.get('id')||'')
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.departmentId=parseInt(params.get('id')||'')
    }
    )
  }
  goPrevious(){
    let previousId=this.departmentId-1
    this.router.navigate(['/department', previousId])
  }
  goNext(){
    let nextId=this.departmentId+1
    this.router.navigate(['/department', nextId])
  }
}
