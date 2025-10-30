import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudent } from './admin-student';

describe('AdminStudent', () => {
  let component: AdminStudent;
  let fixture: ComponentFixture<AdminStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
