module.exports = {
    'presets': [
        [
            '@babel/preset-env',
            {
                'modules': 'auto',
                'targets': {
                    'node': 'current',
                    'browsers': [ '> 1%', 'last 2 versions', 'not ie <= 8' ]
                },
                useBuiltIns: 'entry',
                exclude: [ 'transform-typeof-symbol' ],
            }
        ],
        '@vue/app',
    ],
    'plugins': [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-json-strings',
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-transform-async-to-generator',
        [ '@babel/plugin-transform-runtime',
            {
                'corejs': false,
                'regenerator': true,
                'useESModules': false,
                'helpers': false,
            } ]
    ],
};
