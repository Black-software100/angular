import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysEditComponent } from './toys-edit.component';

describe('ToysEditComponent', () => {
  let component: ToysEditComponent;
  let fixture: ComponentFixture<ToysEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
