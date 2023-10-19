import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheorGridListComponent } from './superheor-grid-list.component';

describe('SuperheorGridListComponent', () => {
  let component: SuperheorGridListComponent;
  let fixture: ComponentFixture<SuperheorGridListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheorGridListComponent]
    });
    fixture = TestBed.createComponent(SuperheorGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
