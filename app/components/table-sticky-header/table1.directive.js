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
            var headerFixed = false;
            var stylesForWrapper = {
                height: wantedHeight,
                overflowY: 'scroll',
                display: 'inline-block'
            };
            var stylesForThead = {
                position: 'fixed',
                top: '0',
                background: 'white'
            };
            var xx = {
                paddingTop: tableHeader.offsetHeight + 'px'

            };
            element.css(stylesForWrapper);

            element.on('scroll', function(){
                console.log('success')
                if (angular.element(element)[0].scrollTop >= tableHeader.offsetHeight){
                    angular.element(tableHeader).css(stylesForThead);
                    headerFixed = true;
                }
                else if (angular.element(element)[0].scrollTop == 0 && headerFixed){

                    angular.element(tableHeader).css({
                        position: 'relative',
                        top: '',
                        background: ''
                    });
                }
            });

        }

    }

})();
