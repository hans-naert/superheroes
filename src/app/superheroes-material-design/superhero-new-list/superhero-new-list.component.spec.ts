import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroNewListComponent } from './superhero-new-list.component';

describe('SuperheroNewListComponent', () => {
  let component: SuperheroNewListComponent;
  let fixture: ComponentFixture<SuperheroNewListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroNewListComponent]
    });
    fixture = TestBed.createComponent(SuperheroNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
