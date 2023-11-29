import { TestBed } from '@angular/core/testing';

import { MenuAdminService } from './menu-admin.service';

describe('MenuAdminService', () => {
  let service: MenuAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
