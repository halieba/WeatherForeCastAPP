//DIRECTIVES

myWeatherApp.directive("weatherReport",function(){
     var mytemplate={
         restrict:'E',//E-ELEMENT,A-ATTRIBUTE,C-CLASS,M-COMMENT, I KNOW
        templateUrl:'Directive/weatherDirective.html',
     
               scope:{
            
                  weatherDay:'=',
                   convertToStandard:'&',
                   convertToDate:'&',
                   dateFormat:'@'
                   // @ String,& function,=Object
                 
         }

      
    }
    return mytemplate;
    
});