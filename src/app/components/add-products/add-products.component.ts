import { eventService } from './../../shared/services/eventService';
import { categoryService } from './../../shared/services/categoryService';
import { productService } from './../../shared/services/productService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { GetAttributesDto } from 'src/app/shared/services/models/Attribute';
import { DropDownListDto, GetCategoriesDto } from 'src/app/shared/services/models/category';
import { GetProductsDto } from 'src/app/shared/services/models/product';
import { GetEventDto } from 'src/app/shared/services/models/Occasion';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})


export class AddProductsComponent implements OnInit {
  productForm: FormGroup;
  productList: GetProductsDto[] = [];
  pattributeTypesDDlList: DropDownListDto[] = [];
  categoriesList: GetCategoriesDto[] = [];
  eventList: GetEventDto[] = [];
  allCustomization: boolean = false;
  size: number = 0;

  constructor(
    private productService: productService,
    private formBuilder: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private catService: categoryService,
    private eventService: eventService,
  ) {

    this.productForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        allowCustomization: [''],
        price: ['', Validators.required],
        customizationPrice: ['', Validators.required],
        rate: ['', Validators.required],
        size: [''],
        details: ['', Validators.required],
        categoryid: ['', Validators.required],
        gender: ['', Validators.required],
        attributeTypeId: ['', Validators.required],
        ageFrom: ['', Validators.required],
        ageTo: ['', Validators.required],
        relationShipId: ['', Validators.required],
        trending: ['', Validators.required],
        sameDayDelivery: ['', Validators.required],
        eventId: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.GetattributeTypesDDl();
    this.LoadData();

    this.catService.getAllcategories(1, 10, 0)
      .subscribe((data) => {
        this.categoriesList = data.data.items;
      });
    this.eventService.getAllEvents(1, 10)
      .subscribe((data) => {
        this.eventList = data.data.items;
      });
  }

  onRadioChanged(val: any) {
    this.allCustomization = val.target.checked;
  }
  onRadioGroupChanged(val: any, name: string) {
    debugger
    switch (name) {
      case 'check1': this.size = 1; break;
      case 'check2': this.size = 2; break;
      case 'check3': this.size = 3; break;
    }
  }
  LoadData() {
    this.productService.getAllProducts(1, 10, 0)
      .subscribe((data) => {
        this.productList = data.data.items;
      });

  }
  GetattributeTypesDDl() {
    this.productService.getAllAttributeTypes()
      .subscribe((data) => {
        this.pattributeTypesDDlList = data.data;
      });
  }

  saveData() {

  }
  ChangesCategoryStatus(prodWithNewStatus:GetProductsDto)
  {
    // debugger;
    // this.productService
    // .update(prodWithNewStatus.id, prodWithNewStatus.name, prodWithNewStatus.allowCustomization, Price, CustomizationPrice, Rank, Size, Details, IsActive,
    //   CategoryId, Gender, AgeFrom, AgeTo, RelationShipId,
    //   Trending, SameDayDelivery, attributeTypeId)
    // .subscribe(
    //   (result) => {
    //     if (result.id !=null && result.id !=0) {
    //     }
    //   },
    //   (err) => {
     
    //   }
    // );
  
  }
  


}

