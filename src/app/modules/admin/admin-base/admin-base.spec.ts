import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBase } from './admin-base';

describe('AdminBase', () => {
  let component: AdminBase;
  let fixture: ComponentFixture<AdminBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
