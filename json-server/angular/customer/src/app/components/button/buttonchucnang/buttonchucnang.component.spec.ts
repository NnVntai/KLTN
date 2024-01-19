import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonchucnangComponent } from './buttonchucnang.component';

describe('ButtonchucnangComponent', () => {
  let component: ButtonchucnangComponent;
  let fixture: ComponentFixture<ButtonchucnangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonchucnangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonchucnangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
