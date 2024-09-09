import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true, // Indicate that this is a standalone component
  imports: [FormsModule] // Include FormsModule here
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  signup() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }
    // Add your sign-up logic here
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
