import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroProfile } from './superhero-profile';

describe('SuperheroProfile', () => {
  let component: SuperheroProfile;
  let fixture: ComponentFixture<SuperheroProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperheroProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
