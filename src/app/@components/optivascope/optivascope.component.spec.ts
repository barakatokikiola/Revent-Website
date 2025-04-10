import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivascopeComponent } from './optivascope.component';

describe('OptivascopeComponent', () => {
  let component: OptivascopeComponent;
  let fixture: ComponentFixture<OptivascopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivascopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptivascopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
