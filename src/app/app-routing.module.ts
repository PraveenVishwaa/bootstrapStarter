import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DefaultPageComponent } from './general/default-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'',
    component:DefaultPageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: ()=> import('./dashboard/dashboard.module').then(m=> m.DashboardModule)
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
