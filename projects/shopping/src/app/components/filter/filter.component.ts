import { Component, EventEmitter, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() public ElectronicsCount:number=0;
  @Input() public JeweleryCount:number=0;
  @Input() public MensCount:number=0;
  @Input() public WomensCount:number=0;
  @Input() public AllCount:number=0;
  public CategoryName:string='all';

  @Output() public CategoryChanged:EventEmitter<string>=new EventEmitter<string>();
  @Output() SendClick:EventEmitter<any>=new EventEmitter<any>();
   public SendCategoryName(e:any){
   
    this.CategoryChanged.emit(e.target.value);
   }
   public SendButtonClick(){
    this.SendClick.emit({'Name':'TV','Price':56000});
   }
}
