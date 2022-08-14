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
  totalCount:number=0;
  
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
       this.LoadData(1,10);
    
   }
 
   onPageChange(e:any){
    this.LoadData(e.page,e.rows);
  }

 LoadData(page: number, pageSize: number) {
  this.eventService.getAllEvents(page+1, pageSize,)
  .subscribe((data) => {
    this.eventList = data.data.items;
    this.totalCount =data.data.totalCount; 
  });
 }

 

 saveData() {
  
  this.eventForm.markAllAsTouched();
    if (this.eventForm.invalid) {
      return;
    }
    let eventModel = this.eventForm.value;
    this.eventService
      .add( eventModel.name,this.dates,this.dates2)
      .subscribe(
        (result) => {
          if (result.succeeded) {
            this.eventForm.reset();
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

