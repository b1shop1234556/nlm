import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMainPageComponent } from './dash-main-page.component';

describe('DashMainPageComponent', () => {
  let component: DashMainPageComponent;
  let fixture: ComponentFixture<DashMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
