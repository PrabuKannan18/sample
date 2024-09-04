import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface User {
  id: number; 
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });
  }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  onSubmit() {
    if (this.userForm.valid) {
     
      const newUser: Omit<User, 'id'> = {
        name: this.userForm.value.name ??'',  
        username: this.userForm.value.username ?? '',
        email: this.userForm.value.email ?? ''
      };

      this.http.post<User>('https://jsonplaceholder.typicode.com/users', newUser).subscribe((res) => {
        if (res) {
          alert("User Created Successfully");
          this.users.push(res);  
          this.userForm.reset();  
        } else {
          alert("Failed to create user");
        }
      }, (error) => {
        console.error('Error creating user', error);
        alert("Failed to create user");
      });
    } else {
      alert("Please fill out all fields correctly.");
    }
  }
}
