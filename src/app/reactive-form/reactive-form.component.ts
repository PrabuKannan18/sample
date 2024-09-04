import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName1:new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName1:new FormControl('',[Validators.required,Validators.minLength(4)]),
    userName1:new FormControl('',[Validators.required,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    married: new FormControl(false),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched(); // This will mark all fields as touched, showing validation errors
    }
  }
}

