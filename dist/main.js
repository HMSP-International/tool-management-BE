"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const bodyParser = require("body-parser");
(async function DucHuyRunning() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('http.port');
    const limitReq = configService.get('app.limit_req');
    app.use(bodyParser.json({ limit: limitReq }));
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port, () => {
        console.log(`http://localhost:${port}/graphql`);
    });
})();
//# sourceMappingURL=main.js.map