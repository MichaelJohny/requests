import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private http: HttpClient) { }

  getData<T>(actionUrl: string, requestObj: T | any): Observable<T> {
    return this.http.post<T>(actionUrl, requestObj);
  }
  GetData<T>(actionUrl: string, requestobject: T | any): Observable<T> {
    return this.http.post<T>(actionUrl, requestobject);
  }

  updateData<T>(actionUrl: string, requestObj: T | any): Observable<T> {
    return this.http.post<T>(actionUrl, requestObj);
  }

  getDataList<T>(actionUrl: string, requestObj: T | any): Observable<T[]> {
    return this.http.post<T[]>(actionUrl, requestObj);
  }

  getDDlData<T>(actionUrl: string): Observable<T> {
    return this.http.get<T>(actionUrl);
  }

  // CURD
//   updateData<T>(actionUrl: string, requestObj: T | any): Observable<T> {
//     const requestModel: RequestDto<T> = {
//       language: 1,
//       requestData: requestObj,
//     };
//     return this.http.post<T>(actionUrl, requestModel);
//   }

  Upload<T>(actionUrl: string, requestObj: T | any): Observable<T> {
    return this.http.post<any>(actionUrl, requestObj);
  }
  updateDataWithoutBaseModel<T>(
    actionUrl: string,
    requestObj: T | any
  ): Observable<T> {
    return this.http.post<T>(actionUrl, requestObj);
  }


}