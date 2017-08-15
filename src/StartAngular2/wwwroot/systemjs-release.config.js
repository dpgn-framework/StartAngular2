(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'StartAngular2/app', // our application files
        '@angular': 'StartAngular2/js/@angular', // angular2 packages
        'rxjs': 'StartAngular2/js/rxjs' // Rxjs package
    };
    // packages tells the System loader which filename and/or extensions to look for by default (when none are specified)
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };
    // configure @angular packages
    var ngPackageNames = [
      'common',
      'compiler',
      'compiler-cli',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'platform-server',
      'router',
      'upgrade',
    ];

    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js',
            defaultExtension: 'js' };
    }
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName +
    '.umd.js', defaultExtension: 'js' };
    };
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);