import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroToolbar } from './superhero-toolbar';

describe('SuperheroToolbar', () => {
  let component: SuperheroToolbar;
  let fixture: ComponentFixture<SuperheroToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperheroToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
