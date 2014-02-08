/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:47 AM
 * @author Adam C. Nowak
 * @description
 */

/*global module:false*/

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            aws_cms : {
                src: [
                    'public/js/app/src/config/config.js',
                    'public/js/app/src/util/util.js',

                    'views/template/template.js',
                    'views/template/global/template_global.js',
                    'views/template/error/template_error.js',
                    'views/template/layouts/template_layouts.js',
                    'views/template/layouts/template_onecolumn.js',
                    'views/template/layouts/template_twocolumn.js',
                    'views/template/home/template_home.js',
                    'views/template/statistics/template_statistics.js',
                    'views/template/github/template_github.js',

                    //Add the rest of the template JS files here for concatenation

                    /* Integration related components - e.g. Calling DB Functions*/
                    'public/js/app/src/integration/integration.js',
                    'public/js/app/src/integration/leaderboard/statistic_rest.js',
                    'public/js/app/src/integration/leaderboard/leaderboard_rest.js',

                    /* View Models */
                    'public/js/app/src/viewmodel/vm_helper.js',
                    'public/js/app/src/viewmodel/home/vm_home.js',
                    'public/js/app/src/viewmodel/statistics/vm_statistics.js',

                ],
                dest: 'public/js/app/build/<%= pkg.name %>.js'
            },
            node : {
                src: [
                    'views/template/template_export.js',
                    'views/template/global/template_global.js',
                    'views/template/error/template_error.js',
                    'views/template/layouts/template_layouts.js',
                    'views/template/layouts/template_onecolumn.js',
                    'views/template/layouts/template_twocolumn.js',
                    'views/template/home/template_home.js',
                    'views/template/statistics/template_statistics.js',
                    'views/template/github/template_github.js'
                    //Add the more templates
                ],
                dest: 'views/template.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.aws_cms.dest %>',
                dest: 'public/js/app/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                reporter: 'checkstyle',
                reporterOutput: './checkstyle.xml',
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            sources: {
                src: ['libs/**/*.js', 'test/**/*.js', 'views/template/**/*js', 'public/js/app/src/**/*.js' ]
            }
        },
//    qunit: {
//      files: ['test/**/*.html']
//    },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            sourcefiles: {
                files: '**/*.js',
                tasks: ['concat', 'uglify', 'copy']
            }
//            lib_test: {
//                files: '<%= jshint.lib_test.src %>',
//                tasks: ['jshint:lib_test', 'qunit']
//            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: ['public/js/app/build/<%= pkg.name %>.js'],
                        dest: 'public/js/lib/<%= pkg.name %>.js'
                    }
                ]
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['concat', 'uglify', 'copy']);

};
