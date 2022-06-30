import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AttributeAddedDto, GetAttributesDto } from "./models/Attribute";
import { Result, PagedList, GetCategoriesDto, CategoryAdded, DropDownListDto } from "./models/category";
import { GenericService } from "./models/genericService";

@Injectable({
    providedIn: 'root',
  })
  export class attributeService {
    url:string='http://localhost:5500/api/Attributes/';
    constructor(
      private generalService: GenericService
    ) {
    }
  
    getAllAttributes(pageIndex: number, pageSize: number, occasionId: number): Observable<Result<PagedList<GetAttributesDto[]>>> {
      return this.generalService
        .getData<Result<PagedList<GetAttributesDto[]>>>(this.url+'all', { pageIndex, pageSize });
    }
    add(name: string,attributeTypeId:number): Observable<AttributeAddedDto> {
      return this.generalService.updateData<AttributeAddedDto>(this.url+'add', { name ,attributeTypeId});
    }
    update(id: number, name: string,isActive:boolean): Observable<CategoryAdded> {
      return this.generalService.updateData<CategoryAdded>(this.url+'update', {id, name, isActive });
    }
  
    getAllAttributeTypes(): Observable<Result<DropDownListDto[]>> {
      let ddlResponseModel: DropDownListDto[];
      return this.generalService.getDDlData<Result<DropDownListDto[]>>(this.url+'attributeTypes');
    }
  
  }