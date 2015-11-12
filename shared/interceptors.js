
angular.module('sharedControllers').factory('appHttpRequestInterceptor', function ($q, $location) {
        console.log('rejection');
    
        /*function success(response) {
                return response;
            }

        function error(response) {
            var status = response.status;

            if (status == 401) {
                var deferred = $q.defer();
                var req = {
                    config: response.config,
                    deferred: deferred
                };
                window.location = "/";
        }

        if (status == 404) {
            var deferred = $q.defer();
            var req = {
                config: response.config,
                deferred: deferred
            };
            window.location = "#/404";
            }
            // otherwise
            //return $q.reject(response);
            window.location = "#/500";
        }

        return function (promise) {
            return promise.then(success, error);
        };*/
    
    return {
        
        'responseError': function(rejection) {
            // do something on error
            console.log('rejection');
            console.log(rejection.status);
            if(rejection.status === 404){
                $location.path('/404');                    
            }
            
            
            return $q.reject(rejection);
         }
     };
});