import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <ul class="items" *ngFor="let department of departments"> 
      <li (click)="onSelect(department)">{{department.id}}{{department.name}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  public departments=[
    {id:1, name:"xiao"},
    {id:2, name:"emily"},
    {id:3, name:"yao"},
    {id:4, name:"jack"}
  ]
  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }
  onSelect(department:any){
  this.router.navigate(['/department',department.id])
  }
}
