import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandparentsFormComponent } from './grandparents-form.component';

describe('GrandparentsFormComponent', () => {
  let component: GrandparentsFormComponent;
  let fixture: ComponentFixture<GrandparentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandparentsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandparentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
