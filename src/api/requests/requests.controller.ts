import { Controller, Get } from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('service-requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get()
  async getAllRequests() {
    return await this.requestsService.getAllServiceRequests();
  }
}
