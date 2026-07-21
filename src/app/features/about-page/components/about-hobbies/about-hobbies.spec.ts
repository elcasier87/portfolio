import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHobbies } from './about-hobbies';

describe('AboutHobbies', () => {
  let component: AboutHobbies;
  let fixture: ComponentFixture<AboutHobbies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHobbies],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutHobbies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
