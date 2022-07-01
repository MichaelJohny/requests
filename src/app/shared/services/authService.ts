import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { loginModel, userResult } from "./models/authModel";
import { Result, PagedList, DropDownListDto } from "./models/category";
import { GenericService } from "./models/genericService";
import { GetEventDto, EventddedDto } from "./models/Occasion";

@Injectable({
    providedIn: 'root',
  })
  export class authService {
    url:string='http://localhost:5500/api/Users/';
    constructor(
      private generalService: GenericService 
    ) {
    }
  
    login(PhoneNumber: string,Password:string): Observable<Result<userResult>> {;
      return this.generalService
        .getData<Result<userResult>>(this.url+'login', { PhoneNumber ,Password });
    }
  
  }