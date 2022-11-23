import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysFormComponent } from './toys-form.component';

describe('ToysFormComponent', () => {
  let component: ToysFormComponent;
  let fixture: ComponentFixture<ToysFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
