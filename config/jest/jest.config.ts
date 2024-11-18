/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
  preset: 'ts-jest',
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  modulePaths: ['<rootDir>src'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.ts'],
  moduleNameMapper: { 
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.(svg|png|jpeg)$': path.resolve(__dirname, 'jest-empty-component.tsx')
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        openReport: true,
        inlineSource: true
      }
    ]
  ]
};
