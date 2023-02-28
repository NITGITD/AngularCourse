import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Cart Title Test",()=>{
    it("Expecting Amazon Shopping Cart as Title",()=>{
      expect(component.Title()).toBe("Amazon Shopping Cart");
    })
  });

  describe("Total Test",()=>{
    it("Total must be 40000",()=>{
      expect(component.Total(2,20000)).toBe(40000);
    })
  });
});
