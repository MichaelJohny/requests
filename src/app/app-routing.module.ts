import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';
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
    component: AddCategoryComponent,
    canActivate: [AppGuard]
  },
  {
    path: "add-product",
    component: AddProductsComponent,
    canActivate: [AppGuard]
  },
  {
    path: "add-event",
    component: AddEventsComponent,
    canActivate: [AppGuard]
  },
  {
    path: "add-attrbute",
    component: AddAttrbuteComponent,
    canActivate: [AppGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
