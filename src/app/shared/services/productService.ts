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

  url: string = 'http://localhost:5500/api/Products/';

  constructor(
    private generalService: GenericService
  ) {
  }

  getAllProducts(pageIndex: number, pageSize: number, occasionId: number): Observable<Result<PagedList<GetProductsDto[]>>> {
    return this.generalService
      .getData<Result<PagedList<GetProductsDto[]>>>(this.url + 'all', { pageIndex, pageSize });
  }

  add(name: string, allowCustomization: boolean, price: number, customizationPrice: number, rate: string, size: number, details: string, IsActive: boolean,
    categoryId: number, gender: Gender, ageFrom: number, ageTo: number, relationShipId: number,
    trending: boolean, sameDayDelivery: boolean, attributeIds: number[], relatedProducts: number[]): Observable<Result<ProductAddedDto>> {
    return this.generalService.updateData<Result<ProductAddedDto>>(this.url + 'add',
      {
        name, AllowCustomization: allowCustomization, Price: price,
        CustomizationPrice: customizationPrice, rate: rate, Size: size,
        Details: details, CategoryId: categoryId, Gender: gender,
        AgeFrom: ageFrom, AgeTo: ageTo, RelationShipId: relationShipId,
        Trending: trending, SameDayDelivery: sameDayDelivery, AttributeIds: attributeIds, RelatedProducts: relatedProducts
      }
    );
  }

  update(id: number, name: string, allowCustomization: boolean, price: number, customizationPrice: number, Rate: string, size: number, details: string, isActive: boolean,
    categoryId: number, gender: Gender, ageFrom: number, ageTo: number, relationShipId: number,
    trending: boolean, sameDayDelivery: boolean, attributeTypeId: number[], occasionIds: number[]): Observable<CategoryAdded> {
    return this.generalService.updateData<CategoryAdded>(this.url + 'update',
      {
        id, name, allowCustomization, Price: price, CustomizationPrice: customizationPrice, Rank: Rate, Size: size, Details: details, IsActive: isActive,
        CategoryId: categoryId, Gender: gender, AgeFrom: ageFrom, AgeTo: ageTo, RelationShipId: relationShipId,
        Trending: trending, SameDayDelivery: sameDayDelivery, attributeTypeId,OccasionIds: occasionIds
      });
  }

  getAllAttributeTypes(): Observable<Result<DropDownListDto[]>> {
    let url = 'http://localhost:5500/api/Attributes/attributeTypes';
    let ddlResponseModel: DropDownListDto[];
    return this.generalService.getDDlData<Result<DropDownListDto[]>>(url);
  }

  getAllRelationships(): Observable<Result<DropDownListDto[]>> {
    return this.generalService.getDDlData<Result<DropDownListDto[]>>('http://localhost:5500/api/Relationships');
  }

}