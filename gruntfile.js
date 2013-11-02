module.exports = function(grunt){
     
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'work_folder/js/script.js': ['work_folder/components/js/*.js']
                } // files             
            } // my_target
        }, // uglify
         server: {
            port: process.env.PORT,
            host: process.env.IP
        },
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                } // options
            } // dev
        }, //compass
    watch: {
        //options: {livereload:true},
        scripts: {
        files: ['work_folder/components/js/*.js'],
        tasks: ['uglify']
        },//End scripts.
        sass: {
          files: ['work_folder/components/sass/*.scss'],
          tasks: ['compass:dev']
        },
        html: {
            files: ['*.html']
        }
    }//end watch.
    
    }); // init config
    grunt.registerTask('default', 'watch');
}; // exports