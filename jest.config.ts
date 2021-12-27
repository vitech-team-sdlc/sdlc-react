import type { Config } from '@jest/types';
const { defaults } = require('jest-config');

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
export default config;
