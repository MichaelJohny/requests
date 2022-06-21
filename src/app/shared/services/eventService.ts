import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetAttributesDto, AttributeAddedDto } from "./models/Attribute";
import { Result, PagedList, CategoryAdded, DropDownListDto } from "./models/category";
import { GenericService } from "./models/genericService";
import { EventddedDto, GetEventDto } from "./models/Occasion";

@Injectable({
    providedIn: 'root',
  })
  export class eventService {
  
    constructor(
      private generalService: GenericService
    ) {
    }
  
    getAllEvents(pageIndex: number, pageSize: number): Observable<Result<PagedList<GetEventDto[]>>> {
      let url = 'http://localhost:5500/api/Occasions/all';
      return this.generalService
        .getData<Result<PagedList<GetEventDto[]>>>(url, { pageIndex, pageSize });
    }
    add(name: string,attributeTypeId:number): Observable<EventddedDto> {
      let url = 'http://localhost:5500/api/Occasions/add';
      return this.generalService.updateData<EventddedDto>(url, { name ,attributeTypeId});
    }
    update(id: number, name: string, preparationTime: number, parentCategoryId: number,isActive:boolean): Observable<EventddedDto> {
      let url = 'http://localhost:5500/api/Occasions/update';
      return this.generalService.updateData<EventddedDto>(url, { name, preparationTime, parentCategoryId });
    }
  
    getAllAttributeTypes(): Observable<Result<DropDownListDto[]>> {
      let url = 'http://localhost:5500/api/Occasions/attributeTypes';
      let ddlResponseModel: DropDownListDto[];
      return this.generalService.getDDlData<Result<DropDownListDto[]>>(url);
    }
  
  }