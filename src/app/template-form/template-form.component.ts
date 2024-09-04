import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  model = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
      console.log(userForm.value);
    } else {
      userForm.form.markAllAsTouched(); // This will mark all fields as touched, showing validation errors
    }
  }
}
