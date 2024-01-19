import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtxtComponent } from './inputtxt.component';

describe('InputtxtComponent', () => {
  let component: InputtxtComponent;
  let fixture: ComponentFixture<InputtxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputtxtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputtxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
