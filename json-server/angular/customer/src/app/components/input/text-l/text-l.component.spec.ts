import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLComponent } from './text-l.component';

describe('TextLComponent', () => {
  let component: TextLComponent;
  let fixture: ComponentFixture<TextLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
