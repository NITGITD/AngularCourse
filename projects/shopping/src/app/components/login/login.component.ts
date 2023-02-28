import { Component,OnInit } from "@angular/core";
import { CaptchaService } from "../../services/captcha.service";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{

    public code:string='';
    constructor(private captcha:CaptchaService){

    }
    ngOnInit(): void {
        this.code=this.captcha.Generatecode();
    }
    public NewClick():void{
        this.code=this.captcha.Generatecode();
    }
}