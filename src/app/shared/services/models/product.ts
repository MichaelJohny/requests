export interface ProductAddedDto {
    name: string;
    Trending: boolean;
    SameDayDelivery: boolean;
    AllowCustomization: boolean;
    Price:number;
    Size:number;
    CategoryId:number;
    AgeFrom:number;
    AgeTo:number;
    RelationShipId:number;
    CustomizationPrice:number;
    Rate:string;
    Details:string;
    AttributeIds:number[];
    RelatedProducts:number[];

    
}

export interface GetProductsDto {
    id: number;
    name: string;
    isActive: boolean;
    categoryName:string;
}
export enum Gender
{
    Male = 10,
	Female = 20,
    Both = 30
}