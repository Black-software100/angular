import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildreFormComponent } from './childre-form.component';

describe('ChildreFormComponent', () => {
  let component: ChildreFormComponent;
  let fixture: ComponentFixture<ChildreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
