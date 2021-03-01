        function maximum(){
             let largest = arguments[0];
            
             for(i=1; i < arguments.length; i++){
                largest = largest > arguments[i] ? largest :arguments[i]
             }
            console.log(largest)
         }
         maximum(2,8,5,5,8,95,8)