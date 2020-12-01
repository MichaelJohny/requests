import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAttrbuteComponent } from './components/add-attrbute/add-attrbute.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "add-category",
    component: AddCategoryComponent
  },
  {
    path: "add-product",
    component: AddProductsComponent
  },
  {
    path: "add-event",
    component: AddEventsComponent
  },
  {
    path: "add-attrbute",
    component: AddAttrbuteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
