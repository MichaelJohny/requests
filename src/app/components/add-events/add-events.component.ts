import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { eventService } from 'src/app/shared/services/eventService';
import { GetAttributesDto } from 'src/app/shared/services/models/Attribute';
import { DropDownListDto, GetCategoriesDto } from 'src/app/shared/services/models/category';
import { GetEventDto } from 'src/app/shared/services/models/Occasion';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})


export class AddEventsComponent  implements OnInit {
  eventForm: FormGroup;
  eventList:GetEventDto[]=[];
  pattributeTypesDDlList:DropDownListDto[]=[];
  dates:Date = new Date();
  dates2:Date = new Date();
  
   constructor(
     private eventService:eventService,
     private formBuilder: FormBuilder,
     private primengConfig: PrimeNGConfig
   ) { 
 
     this.eventForm = this.formBuilder.group(
       {
         name: ['', Validators.required],
         DateFrom: [''],
         DateTo: ['']
       }
     );
   }
 
   ngOnInit(): void {
     this.primengConfig.ripple = true;
       this.LoadData();
    
   }
 
 
 LoadData() {
  this.eventService.getAllEvents( 1, 10)
  .subscribe((data) => {
    this.eventList = data.data.items;
  });
 }

 

 saveData() {
  debugger
    if (this.eventForm.invalid) {
      return;
    }
    let eventModel = this.eventForm.value;
    this.eventService
      .add( eventModel.name,this.dates,this.dates2)
      .subscribe(
        (result) => {
          if (result.id !=null && result.id !=0) {
          }
        },
        (err) => {
       
        }
      );
  }
 ChangesCategoryStatus(cateWithNewStatus:GetEventDto)
{
  debugger;
  this.eventService
  .update(cateWithNewStatus.id, cateWithNewStatus.name, cateWithNewStatus.dateFrom, cateWithNewStatus.dateTo,cateWithNewStatus.isActive)
  .subscribe(
    (result) => {
      if (result.id !=null && result.id !=0) {
      }
    },
    (err) => {
   
    }
  );

}
 
 
 
 }

