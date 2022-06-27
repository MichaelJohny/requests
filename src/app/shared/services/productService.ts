import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetAttributesDto, AttributeAddedDto } from "./models/Attribute";
import { Result, PagedList, CategoryAdded, DropDownListDto } from "./models/category";
import { GenericService } from "./models/genericService";
import { Gender, GetProductsDto, ProductAddedDto } from "./models/product";

@Injectable({
    providedIn: 'root',
  })
  export class productService {
    constructor(
      private generalService: GenericService
    ) {
    }
  
    getAllProducts(pageIndex: number, pageSize: number, occasionId: number): Observable<Result<PagedList<GetProductsDto[]>>> {
      let url = 'http://localhost:5500/api/Products/all';
      return this.generalService
        .getData<Result<PagedList<GetProductsDto[]>>>(url, { pageIndex, pageSize });
    }
    add(name: string,AllowCustomization:boolean,Price:number,CustomizationPrice:number, Rank:string,Size:number,Details:string,IsActive:boolean,
      CategoryId:number,Gender:Gender,AgeFrom:number,AgeTo:number,RelationShipId:number,
      Trending:boolean,SameDayDelivery:boolean, attributeTypeId:number): Observable<ProductAddedDto> {
      let url = 'http://localhost:5500/api/Products/add';
      return this.generalService.updateData<ProductAddedDto>(url, { name ,attributeTypeId});
    }
    update(id: number, name: string, preparationTime: number, parentCategoryId: number,isActive:boolean): Observable<CategoryAdded> {
      let url = 'http://localhost:5500/api/Products/update';
      return this.generalService.updateData<CategoryAdded>(url, { name, preparationTime, parentCategoryId });
    }
  
    getAllAttributeTypes(): Observable<Result<DropDownListDto[]>> {
      let url = 'http://localhost:5500/api/Attributes/attributeTypes';
      let ddlResponseModel: DropDownListDto[];
      return this.generalService.getDDlData<Result<DropDownListDto[]>>(url);
    }
  
  }