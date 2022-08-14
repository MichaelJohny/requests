import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AttributeAddedDto, GetAttributesDto, OrderViewDto, OrderVm } from "./models/Attribute";
import { Result, PagedList, GetCategoriesDto, CategoryAdded, DropDownListDto } from "./models/category";
import { GenericService } from "./models/genericService";

@Injectable({
  providedIn: 'root',
})
export class orderService {
  url: string = 'http://localhost:5500/api/Orders/';
  constructor(
    private generalService: GenericService
  ) {
  }

  getAllOrders(pageIndex:number,pageSize:number): Observable<OrderViewDto[]> {
    return this.generalService
      .GetData<OrderViewDto[]>(`${this.url}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

}