(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('freezeColumn', freezeColumn);


    function freezeColumn() {
        return {
            restrict: 'A',
            scope:{
                freezeColumn: '='
            },
            link: freeze
        };

        function freeze(scope, element) {
            var left = 0;
            var wantedWidth = 200 + 'px'; // select table wrapper width
            var stylesForWrapper = { // styles for wrapper
                width: wantedWidth,
                overflowX: 'scroll',
                display: 'inline-block'
            };
            var noStyle = { // styles for table reload
                position: '',
                marginLeft: 0
            };
            element.css(stylesForWrapper);
            scope.$watch(inputValue, moveColumns); // watch input value and change table according to it

            function inputValue() {
                return element[0].querySelector('input').value; // get input value
            }

            function moveColumns(value) {
                    scope.freezeColumn = value; // set input value to attribute
                    left = 0; // set margin to 0
                    nullStyles(); // remove styles from table
                    selectNeeded(); // freeze needed columns
            }

            function nullStyles() { //remove styles before adding new
                var columnsQuantity = element[0].querySelectorAll('tr *'); // select all table elements
                    angular.element(columnsQuantity).css(noStyle);
            }

            function selectNeeded() {
                for (var n = scope.freezeColumn; n >= 1; n--){
                    var mustBeFreezed = element[0].querySelectorAll('tr *:nth-child('+n+')'); // find elements to freeze
                    left += mustBeFreezed[0].offsetWidth; // save width on each iteration
                    var stylesForTh = { // moved column styles
                        position: 'fixed',
                        marginLeft: -left +'px'
                    };
                    angular.element(mustBeFreezed).css(stylesForTh);
                }

            }
        }

    }

})();
