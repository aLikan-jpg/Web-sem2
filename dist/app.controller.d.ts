import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    renderIndexPage(): void;
    renderPage(page: string, res: Response): void;
}
