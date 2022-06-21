import { productService } from './../../shared/services/productService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { GetAttributesDto } from 'src/app/shared/services/models/Attribute';
import { DropDownListDto, GetCategoriesDto } from 'src/app/shared/services/models/category';
import { GetProductsDto } from 'src/app/shared/services/models/product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})


export class AddProductsComponent  implements OnInit {
  attributeForm: FormGroup;
  productList:GetProductsDto[]=[];
  pattributeTypesDDlList:DropDownListDto[]=[];
  
   constructor(
     private productService:productService,
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
   this.productService.getAllProducts( 1, 10, 0)
   .subscribe((data) => {
     this.productList = data.data.items;
   });
 
 }
 GetattributeTypesDDl()
 {
   this.productService.getAllAttributeTypes()
   .subscribe((data) => {
     this.pattributeTypesDDlList = data.data;
   });
 }
 
 saveData() {
//  debugger
//    if (this.attributeForm.invalid) {
//      return;
//    }
//    let attributeModel = this.attributeForm.value;
//    this.productService
//      .add( attributeModel.name,Number(attributeModel.attributeTypeId.id))
//      .subscribe(
//        (result) => {
//          if (result.id !=null && result.id !=0) {
 
//            let newItem :GetAttributesDto =  {id:result.id,name:result.name,typeName:'',isActive:true};
 
//            this.productList.push(newItem);
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
  //  this.productService
  //  .update(getCategoriesDto.id, getCategoriesDto.name, getCategoriesDto.preparationTime, getCategoriesDto.parentCategoryId,e.target.checked)
  //  .subscribe(
  //    (result) => {
  //      if (result.id !=null && result.id !=0) {
 
  //        let newItem :GetAttributesDto =  {id:result.id,name:result.name,typeName:'new',isActive:true};
 
  //        this.productList.push(newItem);
  //      }
  //    },
  //    (err) => {
    
  //    }
  //  );
 
 }
 
 
 }

