import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMainPageComponent } from './view-main-page.component';

describe('ViewMainPageComponent', () => {
  let component: ViewMainPageComponent;
  let fixture: ComponentFixture<ViewMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
