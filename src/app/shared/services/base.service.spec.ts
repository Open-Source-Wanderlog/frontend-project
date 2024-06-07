import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseService]
    });

    service = TestBed.inject(BaseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add tests for register method
  it('should register a user', () => {
    const dummyUser = {
      email: 'test@test.com',
      password: 'password',
      full_name: 'Test User',
      phone: '1234567890'
    };

    service.register(dummyUser).subscribe(user => {
      expect(user.email).toEqual('test@test.com');
    });

    const req = httpMock.expectOne('http://localhost:3000/users');
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
  });

  // Add tests for login method
  // Add tests for forgotPassword method
});
