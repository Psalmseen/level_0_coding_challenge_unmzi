       function celsiusToFahrenheit(temp){
            if(typeof temp === "number"){
                const fahrenheitTemp = ( temp * 9 / 5) + 32;
                console.log(fahrenheitTemp+"F")
            }
        }

        function fahrenheitToCelcius(temp){
            if(typeof temp === "number"){
                const celciusTemp = (temp - 32) * 5 / 9;
                console.log(celciusTemp+"C")
            }

        }

        celsiusToFahrenheit(10)
        fahrenheitToCelcius(50)