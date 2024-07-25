import { Injectable, Logger } from '@nestjs/common';
import { sequelize } from './database';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  
  getHello(): string {
    this.logger.log('Hello from AppService!')
    return `Hello World!`;
  }
}
