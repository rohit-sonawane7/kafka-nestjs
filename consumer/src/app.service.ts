import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private databaseConfig;

  constructor(private configService: ConfigService) {
    this.databaseConfig = this.configService.get('database');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
