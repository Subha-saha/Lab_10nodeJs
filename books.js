var app = angular.module('myApp',[]);
app.controller('movies',function($scope, $http)
{
    $http.get("http://localhost:3000/getjson")
    .then(function(response)
    {
        $scope.myData = response.data.books;
        $scope.rowlimit = response.data.length();
        // $scope.orderByMe = function(x) 
        // {
        //     $scope.myOrderBy = x;
        // }
    });

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
    
});

app.filter("myfilter",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});


app.filter('myNameFilter',function()
{
    return function(input)
    {
        return ' ' + input;
    }
});

