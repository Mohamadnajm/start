import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {   
  newUser: any = {
    name: '',
    password: '',
  };
  users: any;
value: any;
  // userService: any;
  // name: void;
  
  constructor(private userService: UserService) {

    // this.userService.getData().subscribe((Data: any) => {
    //   console.warn(Data);
    // });
  }
  login() {
    this.userService
      .login(this.newUser.name, this.newUser.password)
      .subscribe((res: any) => {
          localStorage.setItem('sessionId', res.result.session_id)
        });
  }


}
