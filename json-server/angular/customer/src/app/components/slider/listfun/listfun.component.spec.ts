import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfunComponent } from './listfun.component';

describe('ListfunComponent', () => {
  let component: ListfunComponent;
  let fixture: ComponentFixture<ListfunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
