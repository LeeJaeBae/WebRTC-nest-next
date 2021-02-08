import { Get, Injectable, Param, Render } from '@nestjs/common';

@Injectable()
export class AppService {
  @Render('Index')
  @Get()
  static index(@Param('title') title?: string) {
    return { title };
  }

  @Render('Page')
  @Get()
  static page(@Param('id') id?: string) {
    return { id };
  }
}
