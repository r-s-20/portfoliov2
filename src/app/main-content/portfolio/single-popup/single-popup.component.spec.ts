import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePopupComponent } from './single-popup.component';

describe('SinglePopupComponent', () => {
  let component: SinglePopupComponent;
  let fixture: ComponentFixture<SinglePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
