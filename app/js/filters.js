'use strict';


eventsApp.filter('durations', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return 'Half Hour';
            case 2:
                return '1 Hour';
            case 3:
                return 'Half Day';
            case 4:
                return 'Full Day'
        }
    }

});


eventsApp.filter('levels', function() {
    return function(level) {

        switch (level) {
            case 1:
                return '/img/level1.png';
            case 2:
                return '/img/level2.png';
            case 3:
                return '/img/level3.png';

        }
    }

});
