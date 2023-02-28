import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

// // public Products:{Name:string,ShippedTo:string}[]=[
// //   {Name:"Samsung TV",ShippedTo:"Delhi"},
// //   {Name:"Mobile",ShippedTo:"Hyd"},
// //   {Name:"Watch",ShippedTo:"Goa"},
// //   {Name:"Shirt",ShippedTo:"Mumbai"},
// // ];
// // public Status:any={
// //   'Delhi':'Delivery in 2 Days', 
// //   'Hyd':'Same day Delivery', 
// //   'Mumbai':' One DayDelivery', 
// //   'other':'Usally dispatched in 3-4 working days' 
// // }
// public Messages:string[]=[];
// public Count:number=0;
// public Message:string='';
// public ShowMessage:boolean=false;

// public NotificationMap={
//   '01':'No New Message',
//   '=1':'One New Message',
//   'other':'#Message'
// }
// ngOnInit(): void {
//   this.Count=this.Messages.length;
// }
// public SendClick(){
//   var now=new Date();
//   this.Messages.push(this.Message+" "+now.toLocaleDateString());
//   this.Count=this.Messages.length;
//   alert("Message Sent");
//   this.Message="";
// }
// public ShowClick(){
//   this.ShowMessage=(this.ShowMessage==true)?false:true;
// }
public title:string="weLcOMe to aNgUlAr";

}
