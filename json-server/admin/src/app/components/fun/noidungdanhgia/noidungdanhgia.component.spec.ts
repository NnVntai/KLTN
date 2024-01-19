import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoidungdanhgiaComponent } from './noidungdanhgia.component';

describe('NoidungdanhgiaComponent', () => {
  let component: NoidungdanhgiaComponent;
  let fixture: ComponentFixture<NoidungdanhgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoidungdanhgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoidungdanhgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
