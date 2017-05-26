(function() {
    'use strict';

    angular
    .module('myApp')
    .component('table1', {
        templateUrl: './app/components/table-sticky-header/table1.component.html',
        controller: table1Controller,
        controllerAs: 'table1Controller'
    });

function table1Controller() {
    var vm = this;
    vm.rows = [];
    vm.pushRows = pushRows;
    vm.pushRows();

    function pushRows() {
        for (var i=0; i < 10; i++){
            vm.rows.push(i);
        }
    }

}

})();
