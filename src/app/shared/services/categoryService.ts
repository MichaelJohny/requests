import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryAdded, DropDownListDto, GetCategoriesDto, PagedList, Result } from './models/category';
import { GenericService } from './models/genericService';


@Injectable({
  providedIn: 'root',
})
export class categoryService {

  url:string='http://localhost:5500/api/Category/';
  constructor(
    private generalService: GenericService
  ) {
  }

  getAllcategories(pageIndex: number, pageSize: number, occasionId: number): Observable<Result<PagedList<GetCategoriesDto[]>>> {
    return this.generalService
      .getData<Result<PagedList<GetCategoriesDto[]>>>(this.url+'categories', { pageIndex, pageSize, occasionId });
  }
  add(name: string, parentCategoryId: number): Observable<CategoryAdded> {
    return this.generalService.updateData<CategoryAdded>(this.url+'add', { name, parentCategoryId });
  }
  update(id: number, name: string, preparationTime: number, parentCategoryId: number,isActive:boolean): Observable<CategoryAdded> {
    return this.generalService.updateData<CategoryAdded>(this.url+'update', { id,name, preparationTime, parentCategoryId });
  }

  getAllParentDDl(): Observable<Result<DropDownListDto[]>> {
    let ddlResponseModel: DropDownListDto[];
    return this.generalService.getDDlData<Result<DropDownListDto[]>>(this.url+'categories/parent');
  }

  // getLocalizationTypes(): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl + ServiceUrls.GetLocalizationTypes,
  //     new Object()
  //   );
  // }



  // GetAllFeaturesDropDownList(): Observable<
  //   ResponseDto<LookupContentDropDown[]>
  // > {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl + ServiceUrls.GetAllFeatures,
  //     new Object()
  //   );
  // }

  // getAllUserStatus(): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl + ServiceUrls.GetAllUserStatus,
  //     new Object()
  //   );
  // }

  // GetAllUserType(
  //   usertpeId: number
  // ): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl + ServiceUrls.GetAllUserType,
  //     { userTypeId: usertpeId }
  //   );
  // }

  // GetCountryDropDownList(): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl +
  //       ServiceUrls.GetCountryDropDownListUrl,
  //     {}
  //   );
  // }
  // GetWebSiteCountryDropDownList(): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.WebsiteBaseUrl +
  //       ServiceUrls.GetWebSiteCountriesDropDown,
  //     {}
  //   );
  // }


  // getGovernorateDropDownList(
  //   countryId: number
  // ): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl +
  //       ServiceUrls.GetGovernorateDropDownListByIdUrl,
  //     { ParentLookupContentId: countryId }
  //   );
  // }

  // getWebSiteGovernorateDropDownList(
  //   countryId: number
  // ): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.WebsiteBaseUrl +
  //       ServiceUrls.GetWebSiteGovDropDown,
  //     { ParentLookupContentId: countryId }
  //   );
  // }

  // getAppCategory(): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl +
  //       ServiceUrls.GetAppCategoryDropDownListByIdUrl,
  //     {}
  //   );
  // }

  // GetKnowledgeBase(): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl + ServiceUrls.GetKnowledgeBase,
  //     {}
  //   );
  // }

  // GetActionTypes(): Observable<ResponseDto<LookupContentDropDown[]>> {
  //   return this.generalService.getData<ResponseDto<LookupContentDropDown[]>>(
  //     this.configuration$.BackEndBaseUrl + ServiceUrls.GetActionTypes,
  //     new Object()
  //   );
  // }
}