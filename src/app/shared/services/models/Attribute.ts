export interface AttributeAddedDto {
    id: number;
    name: string;
    isActive: boolean;
}

export interface GetAttributesDto {
    id: number;
    name: string;
    isActive: boolean;
    typeName: string;
}
export interface City {
    name: string,
    code: string
}

export interface OrderVm {
    orders: OrderDto[];
}

export interface OrderDto {
    orderStatus: OrderStatus;
    deliveryDate: Date;
    deliveryTime: Date;
    orderItems: OrderItemDto[];
}

export interface OrderItemDto {
    totalPrice: number;
    products: ProductsDto[];
}

export interface ProductsDto {
    customText: string;
    image: string;
    price: number;
    customizationPrice: number;
    details: string;
    name: string
}
export enum OrderStatus {
    New = 10,

    OnHold = 15,

    PendingPayment = 20,

    PaymentReceived = 30,

    PaymentFailed = 35,

    Invoiced = 40,

    Shipping = 50,

    Shipped = 60,

    Complete = 70,

    Canceled = 80,

    Refunded = 90,

    Closed = 100
}

export interface OrderViewDto {

    orderStatus: OrderStatus;
    deliveryDate: Date;
    deliveryTime: Date;
    method: OrderStatus;
    orderTotal: number;
    createdAt: Date;
}