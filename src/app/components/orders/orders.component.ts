import { orderService } from './../../shared/services/orderService';
import { Component, OnInit } from '@angular/core';
import { OrderVm, OrderViewDto } from './../../shared/services/models/Attribute';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersList: OrderViewDto[] = [];
  totalCount : number=0;
  constructor(
    private orderService: orderService
  ) {


  }

  ngOnInit(): void {
    this.LoadData(1,10)
  }
  onPageChange(e:any){
    this.LoadData(e.page,e.rows);
  }
  LoadData(pageIndex:number,pageSize:number) {
    this.orderService.getAllOrders(pageIndex+1,pageSize)
      .subscribe((res: any) => {
        this.ordersList = res.data.items;
        this.totalCount =res.data.totalCount; 
      });

  }

}
