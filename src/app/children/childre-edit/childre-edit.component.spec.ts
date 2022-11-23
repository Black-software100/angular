import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildreEditComponent } from './childre-edit.component';

describe('ChildreEditComponent', () => {
  let component: ChildreEditComponent;
  let fixture: ComponentFixture<ChildreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildreEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
