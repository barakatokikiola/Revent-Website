import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadaboutusComponent } from './readaboutus.component';

describe('ReadaboutusComponent', () => {
  let component: ReadaboutusComponent;
  let fixture: ComponentFixture<ReadaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadaboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
