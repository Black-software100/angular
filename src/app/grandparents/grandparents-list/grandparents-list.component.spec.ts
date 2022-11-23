import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandparentsListComponent } from './grandparents-list.component';

describe('GrandparentsListComponent', () => {
  let component: GrandparentsListComponent;
  let fixture: ComponentFixture<GrandparentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandparentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandparentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
