'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource','baseURL', function($resource,baseURL) {
    
                this.getDishes = function(){
                    
                    return $resource(baseURL+"dishes/:id",
                        null , {'update':{method:'PUT'}});
                    
                };
    
                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function() {

                    //return promotions[index];
                    return $resource(baseURL+"promotions/:id", 
                        null,{});
                };
                        
        }])

        .factory('corporateFactory', ['$resource','baseURL', function($resource,baseURL) {
    
            var corpfac = {};

            corpfac.getLeaders = function(){
                
                return $resource(baseURL+"leadership/:id", 
                        null,{});

            };
            return corpfac;
        }])
        
        .service('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {

            this.saveFeedback = function() {
                return $resource(baseURL+"feedback", null, {});
            };

        }])
;
