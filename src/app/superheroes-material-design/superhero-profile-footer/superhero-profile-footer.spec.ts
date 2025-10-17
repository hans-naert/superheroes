import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroProfileFooter } from './superhero-profile-footer';

describe('SuperheroProfileFooter', () => {
  let component: SuperheroProfileFooter;
  let fixture: ComponentFixture<SuperheroProfileFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperheroProfileFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroProfileFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
