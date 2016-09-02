'use strict';

//this is overwriting the angular exception handler service with custom functionality --- due to the $<name>
eventsApp.factory('$exceptionHandler', function() {
    return function(exception) {
        console.log("exception handled: " + exception.message);

    }
});
