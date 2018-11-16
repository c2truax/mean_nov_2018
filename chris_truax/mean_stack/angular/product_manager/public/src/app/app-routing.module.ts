import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { EditComponent } from './products/edit/edit.component';
import { NewComponent } from './products/new/new.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
      { path: '', component: AllProductsComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'new', component: NewComponent }]
  },
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
