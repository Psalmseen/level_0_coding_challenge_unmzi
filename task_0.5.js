         function calculateAreaOfTriangle(a, b, c){
            if( typeof a && typeof b && typeof c === "number"){
                const s = (a+b+c)/2
                const area = Math.sqrt(s * (s-a) * (s-b) *(s-c))
                console.log(area+ "sqr units")
            }
        }

        calculateAreaOfTriangle(3,4,5)