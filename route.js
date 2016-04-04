myWeatherApp.config(['$routeProvider',function($routeProvider){
    
    $routeProvider
    .when('/',
          {               
templateUrl:"pages/home.html" ,
controller:"homeController"
                     
              })
    .when('/forecast',
          {
        
        templateUrl:'pages/forecast.html',
        controller:'foreCastController'
        
        
    })
    
    .when('/forecast/:days',
         {
        templateUrl:'pages/forecast.html',
        controller:'foreCastController'  
    }

)}
    ]);

