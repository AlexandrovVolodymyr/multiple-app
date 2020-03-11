import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibVendorsComponent } from './lib-vendors.component';

describe('LibVendorsComponent', () => {
  let component: LibVendorsComponent;
  let fixture: ComponentFixture<LibVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
