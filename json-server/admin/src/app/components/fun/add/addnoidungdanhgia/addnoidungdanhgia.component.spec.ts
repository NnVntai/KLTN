import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnoidungdanhgiaComponent } from './addnoidungdanhgia.component';

describe('AddnoidungdanhgiaComponent', () => {
  let component: AddnoidungdanhgiaComponent;
  let fixture: ComponentFixture<AddnoidungdanhgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnoidungdanhgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnoidungdanhgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
