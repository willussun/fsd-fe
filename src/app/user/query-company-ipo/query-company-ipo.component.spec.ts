import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCompanyIpoComponent } from './query-company-ipo.component';

describe('QueryCompanyIpoComponent', () => {
  let component: QueryCompanyIpoComponent;
  let fixture: ComponentFixture<QueryCompanyIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryCompanyIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryCompanyIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
