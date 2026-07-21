import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTechnologies } from './about-technologies';

describe('AboutTechnologies', () => {
  let component: AboutTechnologies;
  let fixture: ComponentFixture<AboutTechnologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTechnologies],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutTechnologies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
