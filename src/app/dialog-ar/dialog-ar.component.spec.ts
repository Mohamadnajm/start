import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArComponent } from './dialog-ar.component';

describe('DialogArComponent', () => {
  let component: DialogArComponent;
  let fixture: ComponentFixture<DialogArComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogArComponent]
    });
    fixture = TestBed.createComponent(DialogArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
