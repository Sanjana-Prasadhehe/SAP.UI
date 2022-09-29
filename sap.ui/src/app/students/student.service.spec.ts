import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';



describe('StudentService', () => {
  let service: StudentService;
  let http: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [ { provide: HttpClient , useValue: http }],
    });
    service = TestBed.inject(StudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
