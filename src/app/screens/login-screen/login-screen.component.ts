import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit{
  public type: String = "password";
  public username:String = "";
  public password: String = "";
  public errors:any = {};

  constructor(){}

  ngOnInit(): void {

  }

  public login(){

  }

  public registrar(){

  }

  public showPassword(){
    if(this.type == "password"){
      $("#show-password").addClass("show-password");
      $("#show-password").attr("data-password", true);
      this.type = "text";
    }else if(this.type == "text"){
      $("#show-password").removeClass("show-password");
      $("#show-password").attr("data-password", false);
      this.type = "password";
    }
  }
}
