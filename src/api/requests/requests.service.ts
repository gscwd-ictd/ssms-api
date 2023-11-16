import { Injectable } from '@nestjs/common';
import { requests } from '../../../mock/requests';

@Injectable()
export class RequestsService {
  constructor() {}

  async getAllServiceRequests() {
    return requests;
  }
}
