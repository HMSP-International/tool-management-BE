import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME_DEV = 'config.dev.yaml';
const YAML_CONFIG_FILENAME_PROD = 'config.prod.yaml';

const readFile: any = (fileName: string) => {
	return yaml.load(readFileSync(join(__dirname, '../../../', fileName), 'utf8')) as Record<string, any>;
};

export default () => {
	console.log('🚀 ~ file: configuration.ts ~ line 14 ~ process.env.NODE_ENV', process.env.NODE_ENV);
	if (process.env.NODE_ENV === 'production') {
		return readFile(YAML_CONFIG_FILENAME_PROD);
	}

	return readFile(YAML_CONFIG_FILENAME_DEV);
};
