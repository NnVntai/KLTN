import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablechildComponent } from './tablechild.component';

describe('TablechildComponent', () => {
  let component: TablechildComponent;
  let fixture: ComponentFixture<TablechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
