        function evenOrOdd(integer){
            if(typeof integer === "number"){
                if(integer % 2 === 0){
                    console.log("even")
                } else{ console.log("odd")}
            }
        }

        evenOrOdd(4)
        evenOrOdd(3)
        evenOrOdd("4")