import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsCardGraphComponent } from './statistics-card-graph.component';

describe('StatisticsCardGraphComponent', () => {
  let component: StatisticsCardGraphComponent;
  let fixture: ComponentFixture<StatisticsCardGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsCardGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticsCardGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
