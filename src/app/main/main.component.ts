import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  //component 

  name=''

  //Event binding

  clickCount = 0;
  clickMe() {
    this.clickCount++;
  }

  //Directives

  isAngularDeveloper:boolean=true;

  AngularDeveloper:String[]=[
    'Html',
    'Css',
    'Javascript',
    'Bootstrap'
    
  ]

  Programming:string[]=[
    'C',
    'C++',
    'Java',
    'Python'
  ]

  onToggle(): void{
    this.isAngularDeveloper=!this.isAngularDeveloper;
  }
  //ngswitch
  num: number = 0; 

 //ngclass
  enableRed=false;
  enableBig=false;
  enableFont=false;

  //ngstyle
  color='red';

  //pipes

  toDate=new Date();
  price=125;

  
}
