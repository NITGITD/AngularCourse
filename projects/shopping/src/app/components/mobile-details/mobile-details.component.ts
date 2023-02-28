import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
   selector: 'app-mobile-details',
   templateUrl: './mobile-details.component.html',
   styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {

   constructor() { }

   public ThenBlock: TemplateRef<any> | null = null;

   @ViewChild('View1', { static: true }) public View1: TemplateRef<any> | null = null;
   @ViewChild('View2', { static: true }) public View2: TemplateRef<any> | null = null;
   @ViewChild('View3', { static: true }) public View3: TemplateRef<any> | null = null;
   @ViewChild('View4', { static: true }) public View4: TemplateRef<any> | null = null;
   @ViewChild('View5', { static: true }) public View5: TemplateRef<any> | null = null;
   @ViewChild('View6', { static: true }) public View6: TemplateRef<any> | null = null;



   ngOnInit(): void {
      this.ThenBlock = this.View1;
   }
   public ChangeView(viewName: string){
      switch (viewName) {
         case "View1":
            this.ThenBlock = this.View1;
            break;
         case "View2":
            this.ThenBlock = this.View2;
            break;
         case "View3":
            this.ThenBlock = this.View3;
            break;
         case "View4":
            this.ThenBlock = this.View4;
            break;
         case "View5":
            this.ThenBlock = this.View5;
            break;
         case "View6":
            this.ThenBlock = this.View6;
            break;
      }
   }


}
