import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  public CityError:string='';
  SubmitClick(data:any){
    alert(JSON.stringify(data));
  }
  public CityChanged(e:any){
    if(e.target.value=="-1"){
      this.CityError="Please Select Your City"
    }else{
      this.CityError="";
    }
  }
}
