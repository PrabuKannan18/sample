import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { Customer } from './_models/customer';
import { CustomerReportComponent } from './customer-report/customer-report.component';




@Component({     
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainComponent,TemplateFormComponent,ReactiveFormComponent,UserListComponent,CustomerAddComponent,CustomerViewComponent,CustomerReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  customers:Customer[]=[];

}
