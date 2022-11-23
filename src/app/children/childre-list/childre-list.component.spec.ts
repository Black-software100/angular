import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildreListComponent } from './childre-list.component';

describe('ChildreListComponent', () => {
  let component: ChildreListComponent;
  let fixture: ComponentFixture<ChildreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
