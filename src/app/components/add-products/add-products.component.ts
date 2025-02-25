
import { eventService } from './../../shared/services/eventService';
import { categoryService } from './../../shared/services/categoryService';
import { productService } from './../../shared/services/productService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { City, GetAttributesDto } from 'src/app/shared/services/models/Attribute';
import { DropDownListDto, GetCategoriesDto } from 'src/app/shared/services/models/category';
import { GetProductsDto, ImageInfo } from 'src/app/shared/services/models/product';
import { GetEventDto } from 'src/app/shared/services/models/Occasion';
import { CheckboxModule } from 'primeng/checkbox';
import { attributeService } from 'src/app/shared/services/attributeService';
import { HttpEventType } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})


export class AddProductsComponent implements OnInit {
  productForm: FormGroup;
  productList: GetProductsDto[] = [];
  pattributeTypesDDlList: DropDownListDto[] = [];
  relationshipsDDlList: DropDownListDto[] = [];
  categoriesList: GetCategoriesDto[] = [];
  eventList: GetEventDto[] = [];
  allCustomization: boolean = false;
  trending: boolean = false;
  sameDayDelavery: boolean = false;
  size: number = 0;
  gender: number = 0;
  releatedProducts: GetProductsDto[] = [];
  selectedProducts: GetProductsDto[] = [];
  attributeList: GetAttributesDto[] = [];
  selectedAtt: GetAttributesDto[] = [];
  imgurl:string='';
  path:string='';

  totalCount : number=0;
  file!: File;
  imageInfo: ImageInfo = {
    imageUrl: '',
    imageExtention: '',
    imageName: '',
    imageSize: '',
  };
  imageUrl: string = '';
  constructor(
    private productService: productService,
    private formBuilder: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private catService: categoryService,
    private eventService: eventService,
    private attServie: attributeService,
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
        trending: [''],
        sameDayDelivery: [''],
        relatedProducts: [''],
        attributeIds: [''],
        imageUrl:['']

      }
    );

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.GetattributeTypesDDl();
    this.GetrelationshipsDDlList();
    this.LoadData(1, 10);
    this.allCustomization = false;
    this.trending = false;
    this.sameDayDelavery = false;

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
  ontrendingRadioChanged(val: any) {
    this.trending = val.target.checked;
  }
  onsameDayDelaveryRadioChanged(val: any) {
    this.sameDayDelavery = val.target.checked;
  }
  onRadioGroupChanged(val: any, name: string) {

    switch (name) {
      case 'check1': this.size = 1; break;
      case 'check2': this.size = 2; break;
      case 'check3': this.size = 3; break;
    }
  }
  onPageChange(e:any){
    this.LoadData(e.page,e.rows);
  }

  onRadioGroupGenderChanged(val: any, name: string) {
    switch (name) {
      case 'check1': this.gender = 1; break;
      case 'check2': this.gender = 2; break;
    }
  }

  LoadData(page: number, pageSize: number) {
    this.productService.getAllProducts(page+1, pageSize, 0)
      .subscribe((data) => {
        this.productList = data.data.items;
        this.totalCount =data.data.totalCount; 
        this.releatedProducts = data.data.items;
      });

  }
  GetattributeTypesDDl() {
    this.productService.getAllAttributeTypes()
      .subscribe((data) => {
        this.pattributeTypesDDlList = data.data;
      });

    this.attServie.getAllAttributes(1, 10, 0)
      .subscribe((data) => {
        this.attributeList = data.data.items;
      });
  }

  GetrelationshipsDDlList() {
    this.productService.getAllRelationships()
      .subscribe((data) => {
        this.relationshipsDDlList = data.data;
      });
  }

  saveData() {
    debugger;
    this.selectedProducts = this.productForm.controls['relatedProducts'].value;
    this.selectedProducts.map(({ id }) => id);
    this.selectedAtt = this.productForm.controls['attributeIds'].value;
    this.selectedAtt.map(({ id }) => id);

    this.productForm.markAllAsTouched();
    this.productForm.controls['size'].setValue(this.size);
    this.productForm.controls['gender'].setValue(this.gender);
    this.productForm.controls['allowCustomization'].setValue(this.allCustomization);
    this.productForm.controls['sameDayDelivery'].setValue(this.sameDayDelavery);
    this.productForm.controls['trending'].setValue(this.trending);

    if (this.productForm.invalid) {
      return;
    }

    let prodModel = this.productForm.value;
    this.productService
      .add(prodModel.name, prodModel.allowCustomization, prodModel.price, prodModel.customizationPrice, prodModel.rate,
        prodModel.size, prodModel.details, true, Number(prodModel.categoryid.id), prodModel.gender, prodModel.ageFrom, prodModel.ageTo
        , Number(prodModel.relationShipId.id), prodModel.trending, prodModel.sameDayDelivery, this.selectedAtt.map(({ id }) => id), this.selectedProducts.map(({ id }) => id))
      .subscribe(
        (result) => {
          if (result.succeeded) {
            this.productForm.reset();
          }
        },
        (err) => {

        }
      );
  }


  ChangesCategoryStatus(prodWithNewStatus: GetProductsDto) {
    debugger;
    this.productService
      .update(prodWithNewStatus.id, prodWithNewStatus.name, true, 0, 0, '', 0, '', prodWithNewStatus.isActive,
        0, 0, 0, 0, 0,
        true, true, [], [])
      .subscribe(
        (result) => {
          if (result.id !=null && result.id !=0) {
          }
        },
        (err) => {

        }
      );

  }

  processDataFile(fileInput: any) {
    debugger;
    this.file = fileInput.files[0];

    // const reader = new FileReader();
    // reader.readAsDataURL(this.file);
    // reader.onload = () => {
    //   this.imageInfo.imageUrl = reader.result?.toString()|| '';
    // };

    if (this.file !== null) {
      this.imageInfo.imageName = this.file.name;
      this.imageInfo.imageExtention = this.file.type;
      this.productService.uploadFile(this.file).subscribe((data) => {
        this.path = data.data.path;
      });
    }
  }

}

