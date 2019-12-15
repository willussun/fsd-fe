import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareComplexComponent } from './compare-complex.component';

describe('CompareComplexComponent', () => {
  let component: CompareComplexComponent;
  let fixture: ComponentFixture<CompareComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
