import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Render('Index')
  @Get()
  public index(@Query('title') title?: string) {
    return { title };
  }
}
