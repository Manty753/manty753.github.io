import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('customers')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  findAll() {
    return this.dataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataService.findOne(id);
  }

  @Post()
  @ApiBody({ type: [CreateCustomerDto] })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.dataService.create(createCustomerDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.dataService.update(id, updateCustomerDto);
  }
}
