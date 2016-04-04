
//CONTROLLERS
myWeatherApp.controller('homeController',['$scope','$log','myWeatherService','$location',function($scope,$log,myWeatherService,$location){
    $scope.city='';
    $scope.city=myWeatherService.city;
    $scope.$watch('city',function(){
        
        myWeatherService.city=$scope.city;
    });
    
 $scope.submit=function(){
    $location.path("/forecast");
}

}
    
    
]);
myWeatherApp.controller("foreCastController",['$scope','$log','$resource','myWeatherService','$filter','$routeParams',function($scope,$log,$resource,myWeatherService,$filter,$routeParams)
    
 {   
    $scope.city='';
    $scope.city=myWeatherService.city;
  //http://api.openweathermap.org/data/2.5/forecast?appid=bc8ec0b82c5a0bff8acb6dbe09227613&q=london&cnt=2 
     
     $scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily");
         //{callback:"JSON_CALLBACK"} ,{ get: { method:"JSONP"}});
   $scope.days=$routeParams.days ||'2'; 
     $scope.weatherResults=$scope.weatherAPI.get({appid:"bc8ec0b82c5a0bff8acb6dbe09227613",q:$scope.city,cnt:$scope.days});
    
      console.log($scope);
     $scope.dayTodate=function(myday){
         return new Date(myday*1000);
     };
     
$scope.kelvinToFahreniet=function(degk){
    return Math.round((1.8*(degk-273))+32);
    
}

 }]);