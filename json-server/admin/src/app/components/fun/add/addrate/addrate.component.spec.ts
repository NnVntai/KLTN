import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrateComponent } from './addrate.component';

describe('AddrateComponent', () => {
  let component: AddrateComponent;
  let fixture: ComponentFixture<AddrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
