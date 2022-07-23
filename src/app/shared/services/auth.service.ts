import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { AuthModel } from "./models/auth.model";
import { userResult } from "./models/authModel";
import { Result } from "./models/category";
import { GenericService } from "./models/genericService";


@Injectable({ providedIn: "root" })
export class AppAuthService {
    constructor(
        private readonly http: HttpClient,
        private generalService: GenericService,
        private readonly router: Router) { }

    authenticated = () => !!this.token();

    //  auth(PhoneNumber: string,Password:string): any  {
    //     this.http
    //         .post("http://localhost:5500/api/Users/login",  { PhoneNumber ,Password })
    //         .subscribe((result: any) => {
    //             debugger;
    //             if (!result.succeeded) 
    //             {
    //                 return false;
    //             }else
    //             {
    //                 localStorage.setItem('token', JSON.stringify(result.data.accessToken));
    //                 this.router.navigate(["add-product"]);
    //                 return true;
    //             }
    //         });
    // }
    auth(PhoneNumber: string,Password:string):  Observable<Result<userResult>>  {
        return this.generalService.updateData<Result<userResult>>('http://localhost:5500/api/Users/login',  { PhoneNumber ,Password });
    }

    signin = () => this.router.navigate([""]);

    signout() {
        localStorage.clear();
        this.signin();
    }

    token = () => localStorage.getItem("token");
}



