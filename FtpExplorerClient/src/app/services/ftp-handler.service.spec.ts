import { TestBed } from '@angular/core/testing';

import { FtpHandlerService } from './ftp-handler.service';

describe('FtpHandlerService', () => {
  let service: FtpHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtpHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
