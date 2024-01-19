import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonstarComponent } from './buttonstar.component';

describe('ButtonstarComponent', () => {
  let component: ButtonstarComponent;
  let fixture: ComponentFixture<ButtonstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonstarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
