import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularEmailEditorComponent } from './angular-email-editor.component';

describe('AngularEmailEditorComponent', () => {
  let component: AngularEmailEditorComponent;
  let fixture: ComponentFixture<AngularEmailEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularEmailEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEmailEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
