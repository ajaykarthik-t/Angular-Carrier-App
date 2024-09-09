import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Indicate that this is a standalone component
  imports: [FormsModule] // Include FormsModule here
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
