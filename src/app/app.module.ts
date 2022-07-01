import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddAttrbuteComponent } from './components/add-attrbute/add-attrbute.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonModule } from "primeng/togglebutton";
import { CalendarModule } from "primeng/calendar";


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
    HttpClientModule,
    AppRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
