import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'
import { Loginmodel } from '../../model/Loginmodel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,MatInputModule,MatButtonModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  _logindata:Loginmodel={
    username:'',
    password:''
  }
ProceedLogin(form:any){
console.log(this._logindata)
}
}
