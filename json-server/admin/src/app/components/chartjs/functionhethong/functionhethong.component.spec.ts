import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionhethongComponent } from './functionhethong.component';

describe('FunctionhethongComponent', () => {
  let component: FunctionhethongComponent;
  let fixture: ComponentFixture<FunctionhethongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionhethongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionhethongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
