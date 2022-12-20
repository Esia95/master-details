import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeComponentModule } from './components/employee/employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-master-details', component: ProductListComponent }, { path: 'employees-master-details', component: EmployeeComponent }]), ProductListComponentModule, ProductServiceModule, EmployeeComponentModule, EmployeeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
