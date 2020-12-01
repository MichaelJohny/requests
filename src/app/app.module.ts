import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddAttrbuteComponent } from './components/add-attrbute/add-attrbute.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddEventsComponent } from './components/add-events/add-events.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCategoryComponent,
    AddAttrbuteComponent,
    AddProductsComponent,
    AddEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
