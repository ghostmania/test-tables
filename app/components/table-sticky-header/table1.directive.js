(function() {
    'use strict';

    angular
    .module('myApp')
    .directive('freezeHeader', freezeHeader);


    function freezeHeader() {
        return {
            restrict: 'A',
            link: freeze
        };

        function freeze(scope, element) {
            var tableHeader = element[0].querySelector('thead');
            var wantedHeight = '200px';
            var stylesForWrapper = {
                height: wantedHeight,
                overflowY: 'scroll',
                display: 'inline-block',
                marginTop: tableHeader.offsetHeight + 'px'
            };
            var stylesForThead = {
                position: 'fixed',
                top: '0'
            };
            element.css(stylesForWrapper);
            angular.element(tableHeader).css(stylesForThead);
        }

    }

})();
