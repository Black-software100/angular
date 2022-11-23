import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyEditComponent } from './money-edit.component';

describe('MoneyEditComponent', () => {
  let component: MoneyEditComponent;
  let fixture: ComponentFixture<MoneyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
