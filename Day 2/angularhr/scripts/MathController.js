hrApp.controller('MathController',['$scope', function($scope) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.sum= 0;
    $scope.substr=0;
    $scope.multiply=0;
    $scope.div=0;
    var first_number = parseInt($scope.a);
    var second_number = parseInt($scope.b);
    $scope.$watch('a',function() {
        first_number = parseInt($scope.a);
        $scope.sum=first_number + second_number;
        $scope.substr=first_number - second_number;
        $scope.multiply=first_number * second_number;
        $scope.div=first_number / second_number;
    });
    $scope.$watch('b',function() {
        second_number = parseInt($scope.b);
        $scope.sum=first_number + second_number;
        $scope.substr=first_number - second_number;
        $scope.multiply=first_number * second_number;
        $scope.div=first_number / second_number;
    });
}]);
