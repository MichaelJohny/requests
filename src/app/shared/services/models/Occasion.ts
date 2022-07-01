export interface EventddedDto {
    id: number;
    name: string;
    isActive: boolean;
    dateTo:string;
    dateFrom:string;
}

export interface GetEventDto {
    id: number;
    name: string;
    isActive: boolean;
    thumbnail:string;
    Image:string;
    dateTo:Date;
    dateFrom:Date;
}