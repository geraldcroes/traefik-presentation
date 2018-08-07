/*jslint node: true, stupid: true */

module.exports = function (gulp, plugins, current_config) {
    'use strict';
    gulp.task('html', function () {
        return gulp.src(current_config.sourcesDir + '/**/*.adoc', {read: false})
            .on('end', function () {
                plugins.asciidoctor.convertFile(
                    current_config.sourcesDir + '/index.adoc',
                    {
                        safe: 'unsafe',
                        backend: 'revealjs',
                        attributes: {
                            'revealjsdir': 'node_modules/reveal.js@',
                            'docinfosPath': current_config.docinfosPath,
                        },
                        to_dir: current_config.distDir,
                    }
                );
            })
            .pipe(plugins.browserSync.stream());
    });
};
