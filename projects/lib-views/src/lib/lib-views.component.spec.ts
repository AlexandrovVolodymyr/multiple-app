import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibViewsComponent } from './lib-views.component';

describe('LibViewsComponent', () => {
  let component: LibViewsComponent;
  let fixture: ComponentFixture<LibViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
