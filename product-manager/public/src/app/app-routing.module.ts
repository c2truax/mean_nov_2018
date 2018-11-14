import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ProductsComponent } from './products/products.component'
import { ProductsEditComponent } from './products/products-edit/products-edit.component'
import { ProductsNewComponent } from './products/products-new/products-new.component'
import { ProductsInfoComponent } from './products/products-info/products-info.component'

const routes: Routes = [
  { path: 'products', component: HomeComponent, children: [
    // nested routes
    { path: '', component: ProductsComponent },
    { path: 'edit/:id', component: ProductsEditComponent },
    { path: 'new', component: ProductsNewComponent },
    { path: ':id', component: ProductsInfoComponent },
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
