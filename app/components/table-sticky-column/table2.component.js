(function() {
    'use strict';

    angular
    .module('myApp')
    .component('table2', {
        templateUrl: './app/components/table-sticky-column/table2.component.html',
        controller: table2Controller,
        controllerAs: 'table2Controller'
    });

    function table2Controller() {
        var vm = this;
        vm.rows = [];
        vm.freeze = 1; // select how much columns to freeze on page load
        vm.pushRows = pushRows;
        vm.pushRows();

        function pushRows() {
            for (var i=0; i < 10; i++){
                vm.rows.push(i);
            }
        }
    }

})();
