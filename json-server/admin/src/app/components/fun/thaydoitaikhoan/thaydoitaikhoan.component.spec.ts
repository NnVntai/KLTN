import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaydoitaikhoanComponent } from './thaydoitaikhoan.component';

describe('ThaydoitaikhoanComponent', () => {
  let component: ThaydoitaikhoanComponent;
  let fixture: ComponentFixture<ThaydoitaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThaydoitaikhoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThaydoitaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
