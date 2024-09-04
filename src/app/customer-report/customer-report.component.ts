import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../_models/customer';

@Component({
  selector: 'app-customer-report',
  standalone: true,
  imports: [],
  templateUrl: './customer-report.component.html',
  styleUrl: './customer-report.component.css'
})
export class CustomerReportComponent implements OnInit {

  constructor(private customerService:CustomerService){}

  customers:Customer[]=[]

  ngOnInit(): void {
    this.customers = this.customerService.get();
    
  }
}
