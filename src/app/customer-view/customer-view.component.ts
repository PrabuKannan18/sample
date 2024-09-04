import { Component } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../_models/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent {

  constructor(private customerService:CustomerService){}
 
  customers:Customer[]=[];
  ngOnInit(): void {
    this.customers=this.customerService.get();  
  }
}
