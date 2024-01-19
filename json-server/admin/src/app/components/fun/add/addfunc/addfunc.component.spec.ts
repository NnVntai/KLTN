import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfuncComponent } from './addfunc.component';

describe('AddfuncComponent', () => {
  let component: AddfuncComponent;
  let fixture: ComponentFixture<AddfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
