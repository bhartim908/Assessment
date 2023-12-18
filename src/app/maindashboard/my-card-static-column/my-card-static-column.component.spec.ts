import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardStaticColumnComponent } from './my-card-static-column.component';

describe('MyCardStaticColumnComponent', () => {
  let component: MyCardStaticColumnComponent;
  let fixture: ComponentFixture<MyCardStaticColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCardStaticColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCardStaticColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
