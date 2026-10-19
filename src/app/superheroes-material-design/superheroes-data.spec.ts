import { TestBed } from '@angular/core/testing';
import { SuperheroesData } from './superheroes-data';

describe('SuperheroesData', () => {
  let service: SuperheroesData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroesData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
