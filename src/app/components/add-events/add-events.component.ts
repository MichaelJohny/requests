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
//  debugger
//    if (this.attributeForm.invalid) {
//      return;
//    }
//    let attributeModel = this.attributeForm.value;
//    this.attributeService
//      .add( attributeModel.name,Number(attributeModel.attributeTypeId.id))
//      .subscribe(
//        (result) => {
//          if (result.id !=null && result.id !=0) {
 
//            let newItem :GetAttributesDto =  {id:result.id,name:result.name,typeName:'',isActive:true};
 
//            this.attributeList.push(newItem);
//          }
//        },
//        (err) => {
      
//        }
//      );
 }
 
 hi()
 {
   debugger;
 }
 
 update( getCategoriesDto : GetCategoriesDto,e:any)
 {
  //  debugger;
  //   let x = e.target.checked;
  //  this.attributeService
  //  .update(getCategoriesDto.id, getCategoriesDto.name, getCategoriesDto.preparationTime, getCategoriesDto.parentCategoryId,e.target.checked)
  //  .subscribe(
  //    (result) => {
  //      if (result.id !=null && result.id !=0) {
 
  //        let newItem :GetAttributesDto =  {id:result.id,name:result.name,typeName:'new',isActive:true};
 
  //        this.attributeList.push(newItem);
  //      }
  //    },
  //    (err) => {
    
  //    }
  //  );
 
 }
 
 
 }

