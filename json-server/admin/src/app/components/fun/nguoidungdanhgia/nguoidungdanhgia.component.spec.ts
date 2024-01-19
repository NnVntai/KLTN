import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoidungdanhgiaComponent } from './nguoidungdanhgia.component';

describe('NguoidungdanhgiaComponent', () => {
  let component: NguoidungdanhgiaComponent;
  let fixture: ComponentFixture<NguoidungdanhgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoidungdanhgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NguoidungdanhgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
