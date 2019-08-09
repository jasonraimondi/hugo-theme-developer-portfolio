const cssPresetEnv = require('postcss-preset-env');
module.exports = {
    plugins: [
        cssPresetEnv({
            stage: 1,
            features: {
                'color-mod-function': {
                    unresolved: 'warn'
                },
                'custom-properties': {
                    preserve: false
                },
                'nesting-rules': true
            }
        }),
    ]
};
