import {
  Get,
  Controller,
  Render,
  UseInterceptors,
  Param,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoadtimeInterceptor } from './loadtime.interceptor';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  @UseInterceptors(new LoadtimeInterceptor())
  @Render('lab1')
  renderIndexPage() {
    return;
  }
  @Get(':page')
  renderPage(@Param('page') page: string, @Res() res: Response) {
    return res.render(page);
  }
}

