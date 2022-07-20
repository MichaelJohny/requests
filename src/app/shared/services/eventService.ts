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
    url:string='http://localhost:5500/api/Occasions/';
    constructor(
      private generalService: GenericService
    ) {
    }
  
    getAllEvents(pageIndex: number, pageSize: number): Observable<Result<PagedList<GetEventDto[]>>> {
      return this.generalService
        .getData<Result<PagedList<GetEventDto[]>>>(this.url+'all', { pageIndex, pageSize });
    }
    add(name: string,DateFrom:Date,DateTo:Date): Observable<EventddedDto> {
      return this.generalService.updateData<EventddedDto>(this.url+'add', { name ,DateFrom,DateTo});
    }
    update(id: number, name: string, DateFrom: Date, DateTo: Date,isActive:boolean): Observable<EventddedDto> {
      return this.generalService.updateData<EventddedDto>(this.url+'update', { id,name, DateFrom, DateTo,isActive });
    }
  
    getAllAttributeTypes(): Observable<Result<DropDownListDto[]>> {
      return this.generalService.getDDlData<Result<DropDownListDto[]>>(this.url+'attributeTypes');
    }
  
  }