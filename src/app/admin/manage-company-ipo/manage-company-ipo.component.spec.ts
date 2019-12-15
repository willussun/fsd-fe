import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompanyIpoComponent } from './manage-company-ipo.component';

describe('ManageCompanyIpoComponent', () => {
  let component: ManageCompanyIpoComponent;
  let fixture: ComponentFixture<ManageCompanyIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompanyIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompanyIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
