import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import {UsersService} from '../users/users.service';
import {JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let uservice : UsersService;
  let jservice : JwtService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService,
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn(() => 'token'),
          }
        }
      ],
    }).compile();
    uservice = module.get<UsersService>(UsersService);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be defined', () => {
    expect(uservice).toBeDefined();
  });
});
