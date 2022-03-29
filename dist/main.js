"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3000;
console.log(process.env);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const hbs = require('hbs');
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'views/partials'));
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map