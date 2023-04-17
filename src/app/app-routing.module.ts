import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { CategoryComponent } from './screens/category/category.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path:'', 
    redirectTo:'dashboard', 
    pathMatch:'full' 
  },
  { 
    path:'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'categories',
        component: CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
