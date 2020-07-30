import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationToggleComponent } from './representation-toggle.component';

describe('RepresentationToggleComponent', () => {
  let component: RepresentationToggleComponent;
  let fixture: ComponentFixture<RepresentationToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentationToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentationToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
