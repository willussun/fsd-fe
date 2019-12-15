import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCompanyComponent } from './query-company.component';

describe('QueryCompanyComponent', () => {
  let component: QueryCompanyComponent;
  let fixture: ComponentFixture<QueryCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
