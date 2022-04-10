import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/paths')
  getList(): any {
    return this.appService.getFilesFromDirectory(
      '/home/r0b0t/utn/TPS_Laboratorio_1/',
    );
    console.log(
      this.appService.getFilesFromDirectory(
        '/home/r0b0t/utn/TPS_Laboratorio_1/',
      ),
    );
  }
}
