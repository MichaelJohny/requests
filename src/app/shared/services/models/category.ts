export interface GetCategoriesQuery {
    pageIndex: number;
    pageSize: number;
    occasionId: number;

}


export interface GetCategoriesDto {
    id: number;
    name: string;
    preparationTime: number;
    parentCategoryId: number;
    image: string;
    thumbnail: string;
    isActive: boolean;
    parentName: string;

}
export interface CategoryAdded {
    id: number;
    name: string;
    parentCategoryId: number;
    preparationTime: number;
    isActive: boolean;
}
export interface PagedList<T> {
    items: T,
    pageNumber: number;
    pageSize: number;
    count: number;
    totalCount: number;
    totalPages: number;
}
export interface Result<T> {
    data: T;
    succeeded: boolean;
    errors: any;
}
export interface DropDownListDto {
    id: number;
    name: string;
}
