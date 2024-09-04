import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit {

  constructor(private customerService:CustomerService){}
 
  ngOnInit(): void {
    
  }

  addCustomer(customer_name:string){
  if(customer_name.trim()){
    this.customerService.add(customer_name);
    
  }else {
    alert('Please fill in the customer name');
  }

}
}
