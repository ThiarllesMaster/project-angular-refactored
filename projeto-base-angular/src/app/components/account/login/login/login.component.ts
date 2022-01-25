import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.authService.login(this.login).subscribe((result) => {
      window.localStorage.setItem('token', result.token)
    })

    this.authService.getRole().subscribe(role => {
      window.localStorage.setItem('role', role.roleName.toString())
    })   

    this.router.navigate([''])

  }


}
