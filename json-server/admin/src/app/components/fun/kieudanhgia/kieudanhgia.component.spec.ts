import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieudanhgiaComponent } from './kieudanhgia.component';

describe('KieudanhgiaComponent', () => {
  let component: KieudanhgiaComponent;
  let fixture: ComponentFixture<KieudanhgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieudanhgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KieudanhgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
