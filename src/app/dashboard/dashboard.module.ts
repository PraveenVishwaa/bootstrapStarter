import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountsComponent } from './counts/counts.component';
import { RouterModule, Routes } from '@angular/router';

const childRoutes:Routes = [
  {
    path:'',
    component:CountsComponent
  }
];


@NgModule({
  declarations: [
    CountsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class DashboardModule { }
