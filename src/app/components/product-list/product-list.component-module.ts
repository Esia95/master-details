import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductListComponent } from './product-list.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
