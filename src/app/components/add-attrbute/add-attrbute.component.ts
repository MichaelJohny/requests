import { attributeService } from './../../shared/services/attributeService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { categoryService } from 'src/app/shared/services/categoryService';
import { GetAttributesDto } from 'src/app/shared/services/models/Attribute';
import { GetCategoriesDto, DropDownListDto } from 'src/app/shared/services/models/category';

@Component({
  selector: 'app-add-attrbute',
  templateUrl: './add-attrbute.component.html',
  styleUrls: ['./add-attrbute.component.scss']
})

export class AddAttrbuteComponent  implements OnInit {
  attributeForm: FormGroup;
  attributeList:GetAttributesDto[]=[];
  pattributeTypesDDlList:DropDownListDto[]=[];
  
   constructor(
     private attributeService:attributeService,
     private formBuilder: FormBuilder,
     private primengConfig: PrimeNGConfig
   ) { 
 
     this.attributeForm = this.formBuilder.group(
       {
         name: ['', Validators.required],
         attributeTypeId: ['', Validators.required]
       }
     );
   }
 
   ngOnInit(): void {
     this.primengConfig.ripple = true;
     this.GetattributeTypesDDl();  
       this.LoadData();
    
   }
 
 
 LoadData() {
   this.attributeService.getAllAttributes( 1, 10, 0)
   .subscribe((data) => {
     this.attributeList = data.data.items;
   });
 
 }
 GetattributeTypesDDl()
 {
   this.attributeService.getAllAttributeTypes()
   .subscribe((data) => {
     this.pattributeTypesDDlList = data.data;
   });
 }
 
 saveData() {
 debugger
   if (this.attributeForm.invalid) {
     return;
   }
   let attributeModel = this.attributeForm.value;
   this.attributeService
     .add( attributeModel.name,Number(attributeModel.attributeTypeId.id))
     .subscribe(
       (result) => {
         if (result.id !=null && result.id !=0) {
 
           let newItem :GetAttributesDto =  {id:result.id,name:result.name,typeName:'',isActive:true};
 
           this.attributeList.push(newItem);
         }
       },
       (err) => {
      
       }
     );
 }
 ChangesCategoryStatus(attWithNewStatus:GetAttributesDto)
{
  debugger;
  this.attributeService
  .update(attWithNewStatus.id, attWithNewStatus.name,attWithNewStatus.isActive)
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
