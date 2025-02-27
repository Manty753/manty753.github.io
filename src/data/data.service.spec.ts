import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataService],
    }).compile();

    service = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a customer', () => {
    const customer = service.create({
      name: 'John',
      email: 'john@example.com',
      phone: '1234567890',
    });
    expect(customer).toEqual({
      id: 1,
      name: 'John',
      email: 'john@example.com',
      phone: '1234567890',
    });
  });

  it('should find all customers', () => {
    service.create({
      name: 'John',
      email: 'john@example.com',
      phone: '1234567890',
    });
    const customers = service.findAll();
    expect(customers.length).toBe(1);
  });
  it('should update customers', () => {
    service.create({
      name: 'John',
      email: 'john@example.com',
      phone: '1234567890',
    });
    const customers = service.update(1, { email: 'john@updated.com' });
    expect(customers.email).toBe('john@updated.com');
  });
});
