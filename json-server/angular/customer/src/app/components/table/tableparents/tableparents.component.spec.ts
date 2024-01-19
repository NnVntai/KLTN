import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableparentsComponent } from './tableparents.component';

describe('TableparentsComponent', () => {
  let component: TableparentsComponent;
  let fixture: ComponentFixture<TableparentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableparentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
