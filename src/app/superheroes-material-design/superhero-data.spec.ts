import { TestBed } from '@angular/core/testing';
import { SuperheroData } from './superhero-data';

describe('SuperheroData', () => {
  let service: SuperheroData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
