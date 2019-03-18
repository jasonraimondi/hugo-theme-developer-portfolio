const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            grid: true,
            browsers: [
                '>1%',
                "last 2 versions",
                "Explorer >= 8",
            ]
        }),
    ]
};
