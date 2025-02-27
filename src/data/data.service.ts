import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { faker } from '@faker-js/faker';
import { users } from 'src/utils/faker';

@Injectable()
export class DataService {
  private customers: Customer[] = users;
  private nextId = faker.string.uuid();

  findAll(): Customer[] {
    return this.customers;
  }

  findOne(id: string): Customer {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  create(customer: CreateCustomerDto): Customer {
    const newCustomer = { id: this.nextId, ...customer };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto): Customer {
    const customer = this.findOne(id);
    if (customer) {
      Object.assign(customer, updateCustomerDto);
    }
    return customer;
  }
}
