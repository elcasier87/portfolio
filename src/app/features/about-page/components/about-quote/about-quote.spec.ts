import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutQuote } from './about-quote';

describe('AboutQuote', () => {
  let component: AboutQuote;
  let fixture: ComponentFixture<AboutQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutQuote],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
