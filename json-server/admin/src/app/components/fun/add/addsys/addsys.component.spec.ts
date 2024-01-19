import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsysComponent } from './addsys.component';

describe('AddsysComponent', () => {
  let component: AddsysComponent;
  let fixture: ComponentFixture<AddsysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
