
import { orderService } from './../../shared/services/orderService';
import { Component, OnInit } from '@angular/core';
import { OrderVm } from 'src/app/shared/services/models/Attribute';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersList: OrderVm ;
  constructor(
    private orderService: orderService
  ) {


  }

  ngOnInit(): void {
  }

  LoadData() {
    this.orderService.getAllOrders()
      .subscribe((data) => {
        this.ordersList = data;
      });

  }

}
