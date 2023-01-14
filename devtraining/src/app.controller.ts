import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // Injeção de dependência para receber um serviço - Acoplamento fraco

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
