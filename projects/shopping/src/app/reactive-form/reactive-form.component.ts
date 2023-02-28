import { Component } from '@angular/core';
import  { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  
  // public frmRegister=new FormGroup({
  //   Name:new FormControl(''),
  //   Price:new FormControl(0),
  //   frmVendor:new FormGroup({
  //     VendorName:new FormControl(''),
  //     VendorRating:new FormControl(0)
  //   })
  // })
  constructor(private fb: FormBuilder){

  }

  public frmRegister = this.fb.group({
      Name : this.fb.control(''),
      Price : this.fb.control(0),
      frmVendor: this.fb.group({
          VendorName: this.fb.control(''),
          VendorRating: this.fb.control(0)
      }),
     Photos: this.fb.array([this.fb.control('')])
  })

   get VendorName(){
      return this.frmRegister.get("VendorName");
   }

   get VendorRating(){
      return this.frmRegister.get("VendorRating");
   }

   get Photos():FormArray{
        return this.frmRegister.get("Photos") as FormArray;
     }

   public RegisterClick(data:any) {
       alert(JSON.stringify(data));
   }
   public UpdateClick(){
       this.frmRegister.patchValue({
           Price : 70000.40,
           frmVendor: {
              VendorRating: 4.1
           }
       })
   }
   public AddMoreClick(){
      this.Photos.push(this.fb.control(''));
   }
   public RemoveClick(index:number) {
      this.Photos.removeAt(index);
   }
}
