import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoryService } from 'src/app/shared/services/categoryService';
import { DropDownListDto, GetCategoriesDto } from 'src/app/shared/services/models/category';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent  implements OnInit {
 CatForm: FormGroup;
 categoriesList:GetCategoriesDto[]=[];
 parentcategoriesDDlList:DropDownListDto[]=[];

 
  constructor(
    private catService:categoryService,
    private formBuilder: FormBuilder,
  ) { 
    this.CatForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        parentCatId: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
      this.LoadData();
      this.GetParentCatDDl();     
  }


LoadData() {
  this.catService.getAllcategories( 1, 10, 0)
  .subscribe((data) => {
    this.categoriesList = data.data.items;
  });

}
GetParentCatDDl()
{
  this.catService.getAllParentDDl()
  .subscribe((data) => {
    this.parentcategoriesDDlList = data.data;
  });
}

saveData() {

  if (this.CatForm.invalid) {
    return;
  }
  let catModel = this.CatForm.value;
  this.catService
    .add( catModel.name,Number(catModel.parentCatId))
    .subscribe(
      (result) => {
        if (result.id !=null && result.id !=0) {

          let newItem :GetCategoriesDto =  {id:result.id,name:result.name,parentName:'new',image:'',
          isActive:result.isActive,parentCategoryId:result.parentCategoryId,preparationTime:result.preparationTime, thumbnail:''};

          this.categoriesList.push(newItem);
        }
      },
      (err) => {
     
      }
    );
}


}
