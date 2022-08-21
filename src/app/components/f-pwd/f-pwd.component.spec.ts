import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FPwdComponent } from './f-pwd.component';

describe('FPwdComponent', () => {
  let component: FPwdComponent;
  let fixture: ComponentFixture<FPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
