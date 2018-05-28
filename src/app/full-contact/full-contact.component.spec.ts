import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullContactComponent } from './full-contact.component';

describe('FullContactComponent', () => {
  let component: FullContactComponent;
  let fixture: ComponentFixture<FullContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
