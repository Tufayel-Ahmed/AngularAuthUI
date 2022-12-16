import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      username: [''],
      password: ['']
    })
  }

  onSignup(){
    if(this.signupForm.valid){
      this.auth.login(this.signupForm.value).subscribe({
        next: (res) => {
          this.signupForm.reset();
          this.router.navigate(['login']);
          alert(res.message);
        },
        error: (err) => {
          alert(err.error.message);
        }
      });
    }
  }
  
}
