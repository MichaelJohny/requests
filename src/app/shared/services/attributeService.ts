import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AttributeAddedDto, GetAttributesDto } from "./models/Attribute";
import { Result, PagedList, GetCategoriesDto, CategoryAdded, DropDownListDto } from "./models/category";
import { GenericService } from "./models/genericService";

@Injectable({
    providedIn: 'root',
  })
  export class attributeService {
  
    constructor(
      private generalService: GenericService
    ) {
    }
  
    getAllAttributes(pageIndex: number, pageSize: number, occasionId: number): Observable<Result<PagedList<GetAttributesDto[]>>> {
      let url = 'http://localhost:5500/api/Attributes/all';
      return this.generalService
        .getData<Result<PagedList<GetAttributesDto[]>>>(url, { pageIndex, pageSize });
    }
    add(name: string,attributeTypeId:number): Observable<AttributeAddedDto> {
      let url = 'http://localhost:5500/api/Attributes/add';
      return this.generalService.updateData<AttributeAddedDto>(url, { name ,attributeTypeId});
    }
    update(id: number, name: string, preparationTime: number, parentCategoryId: number,isActive:boolean): Observable<CategoryAdded> {
      let url = 'http://localhost:5500/api/Attributes/update';
      return this.generalService.updateData<CategoryAdded>(url, { name, preparationTime, parentCategoryId });
    }
  
    getAllAttributeTypes(): Observable<Result<DropDownListDto[]>> {
      let url = 'http://localhost:5500/api/Attributes/attributeTypes';
      let ddlResponseModel: DropDownListDto[];
      return this.generalService.getDDlData<Result<DropDownListDto[]>>(url);
    }
  
  }