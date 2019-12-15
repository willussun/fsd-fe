import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleChartComponent } from './show-single-chart.component';

describe('ShowSingleChartComponent', () => {
  let component: ShowSingleChartComponent;
  let fixture: ComponentFixture<ShowSingleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSingleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSingleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
