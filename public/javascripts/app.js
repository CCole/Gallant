
(function(window, document){
    var angular = require('angular/angular.js');
    require('./components/ng-app.js');
    //require('./components/ng-table.js');
    require('./components/staffQuals.controller.js');
    
    //configure dependancies 
    angular.module('Gallant', [
        'appKit',
        'staff'
    ]);
    
})(window,document);