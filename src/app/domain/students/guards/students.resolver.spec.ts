import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { studentsResolver } from './students.resolver';

describe('studentsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => studentsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
