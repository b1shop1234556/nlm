import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveMainPageComponent } from './leave-main-page.component';

describe('LeaveMainPageComponent', () => {
  let component: LeaveMainPageComponent;
  let fixture: ComponentFixture<LeaveMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
