import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {

public bgStyle:string='red';
public textStyle:string='white';
public padding:string='0px';
public fontSize:string='0px';

public styleObject:{'background-color':string,'color':string,'padding':string,'font-size':string}={
  "background-color":"red",
  "color":"white",
  "padding":"10px",
  "font-size":"10px"
}
public FontChange(){
  this.styleObject={
    "background-color":this.bgStyle,
    "color":this.textStyle,
    "padding":this.padding+"px",
    "font-size":this.fontSize+"px"
  }
}
public ApplyClick(){
  this.styleObject={
    "background-color":this.bgStyle,
    "color":this.textStyle,
    "padding":this.padding+"px",
    "font-size":this.fontSize+"px"
  }
}
  
}
