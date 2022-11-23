import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandparentsEditComponent } from './grandparents-edit.component';

describe('GrandparentsEditComponent', () => {
  let component: GrandparentsEditComponent;
  let fixture: ComponentFixture<GrandparentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandparentsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandparentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
