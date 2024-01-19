import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKieudanhgiaComponent } from './add-kieudanhgia.component';

describe('AddKieudanhgiaComponent', () => {
  let component: AddKieudanhgiaComponent;
  let fixture: ComponentFixture<AddKieudanhgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKieudanhgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKieudanhgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
