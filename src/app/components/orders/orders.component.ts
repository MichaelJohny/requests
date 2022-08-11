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
  constructor(
    private orderService: orderService
  ) {


  }

  ngOnInit(): void {
    this.LoadData()
  }

  LoadData() {
    this.orderService.getAllOrders()
      .subscribe((res: any) => {
        this.ordersList = res.data.items;
      });

  }

}
