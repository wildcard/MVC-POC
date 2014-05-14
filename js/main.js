
require.config({
    baseUrl: '/',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        'bower': 'bower_components',

        'jquery': 'bower_components/jquery/dist/jquery',
        'jquery.bootstrap': ['bower_components/bootstrap/dist/js/bootstrap'],
        
        'modernizr': 'bower_components/modernizr/modernizr',
    },
     shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(["plugins", "jquery","modernizr","jquery.bootstrap"], function(plugins,$,Modernizr) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".


});