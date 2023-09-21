import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroProfileFooterComponent } from './superhero-profile-footer.component';

describe('SuperheroProfileFooterComponent', () => {
  let component: SuperheroProfileFooterComponent;
  let fixture: ComponentFixture<SuperheroProfileFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroProfileFooterComponent]
    });
    fixture = TestBed.createComponent(SuperheroProfileFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
