import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddeditComponent } from './employee-addedit.component';

describe('EmployeeAddeditComponent', () => {
  let component: EmployeeAddeditComponent;
  let fixture: ComponentFixture<EmployeeAddeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAddeditComponent]
    });
    fixture = TestBed.createComponent(EmployeeAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
