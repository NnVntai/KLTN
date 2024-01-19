import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartcolumComponent } from './chartcolum.component';

describe('ChartcolumComponent', () => {
  let component: ChartcolumComponent;
  let fixture: ComponentFixture<ChartcolumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartcolumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartcolumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
