import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonIconsComponent } from './common-icons.component';

describe('CommonIconsComponent', () => {
  let component: CommonIconsComponent;
  let fixture: ComponentFixture<CommonIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
