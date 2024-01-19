import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaitroComponent } from './add-vaitro.component';

describe('AddVaitroComponent', () => {
  let component: AddVaitroComponent;
  let fixture: ComponentFixture<AddVaitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVaitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVaitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
