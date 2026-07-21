import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkStyle } from './about-work-style';

describe('AboutWorkStyle', () => {
  let component: AboutWorkStyle;
  let fixture: ComponentFixture<AboutWorkStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWorkStyle],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutWorkStyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
