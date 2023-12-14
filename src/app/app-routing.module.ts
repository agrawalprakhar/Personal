import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddeditComponent } from './employee-addedit/employee-addedit.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/add', component: EmployeeAddeditComponent},
  { path: 'employee/edit/:id', component: EmployeeAddeditComponent },
  { path: '**', redirectTo: '/employees' } // Redirect to employee list for any unknown route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
