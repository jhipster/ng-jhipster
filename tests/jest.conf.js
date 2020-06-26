module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/tests/setupJest.ts'],
    globals: {
        'ts-jest': {
            stringifyContentPathRegex: '\\.html$',
            tsConfig: 'tests/tsconfig.spec.json',
            astTransformers: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
        },
    },
    testMatch: ['<rootDir>/tests/**/*.spec.ts'],
    rootDir: '../',
    testURL: 'http://localhost/',
};
