'use strict';

eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        replace: true, // will remove/replace the directive element from the html ...eg the <event-thumbail> bit with the html from the template
        templateUrl: '/templates/directives/eventThumbnail.html',
        scope: { // this is used to enable multiple versions of the same directive to have their own specific binding
            event: '='
        }
    }


})
