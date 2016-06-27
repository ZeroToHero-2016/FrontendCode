hrApp.controller('RequestController', ['$scope','$http', function($scope, http){

    $scope.jobList = [];

//    TODO #10 - make AJAX call
    http.get("http://localhost:8080/datamodel/jobs/findAll")
        .success(function(data,status,headers,config) {
            $scope.jobList = data;
        })
        .error(function(data,status,headers,config) {
            alert("Error" + status);
        })

}]);
