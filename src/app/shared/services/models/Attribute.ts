export interface AttributeAddedDto {
    id: number;
    name: string;
    isActive: boolean;
}

export interface GetAttributesDto {
    id: number;
    name: string;
    isActive: boolean;
    typeName:string;
}