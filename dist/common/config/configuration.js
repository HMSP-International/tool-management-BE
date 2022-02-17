"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yaml = require("js-yaml");
const path_1 = require("path");
const YAML_CONFIG_FILENAME_DEV = 'config.dev.yaml';
const YAML_CONFIG_FILENAME_PROD = 'config.prod.yaml';
const readFile = (fileName) => {
    return yaml.load((0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../../', fileName), 'utf8'));
};
exports.default = () => {
    console.log('🚀 ~ file: configuration.ts ~ line 14 ~ process.env.NODE_ENV', process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
        return readFile(YAML_CONFIG_FILENAME_DEV);
    }
    return readFile(YAML_CONFIG_FILENAME_DEV);
};
//# sourceMappingURL=configuration.js.map