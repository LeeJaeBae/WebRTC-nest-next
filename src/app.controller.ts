import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import io from 'socket.io-client';

@Controller()
export class AppController {
  @Render('Index')
  @Get('')
  public index() {
    return AppService.index('next-app');
  }


  @Render('Page')
  @Get('/id/:id')
  public page(@Param('id') id?: string) {
    return AppService.page(id);
  }

  @Render('Chat')
  @Get('/chat')
  public async chat() {
    // const socket = io('http://localhost:3000');
    // console.log(socket);
    // return { socket };
  }
}
