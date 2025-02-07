import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeaveRequestComponent } from './my-leave-request.component';

describe('MyLeaveRequestComponent', () => {
  let component: MyLeaveRequestComponent;
  let fixture: ComponentFixture<MyLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLeaveRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
