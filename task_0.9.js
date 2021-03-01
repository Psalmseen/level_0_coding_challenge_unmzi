       function printVowel(str){
            const arrayOfString = str.split("");
            const vowels =[]
            for(i=0; i < arrayOfString.length; i++){
                switch( arrayOfString[i].toLowerCase()){
                    case "a" : vowels.push(arrayOfString[i]); break
                    case "e" : vowels.push(arrayOfString[i]); break
                    case "i" : vowels.push(arrayOfString[i]); break
                    case "o" : vowels.push(arrayOfString[i]); break
                    case "u" : vowels.push(arrayOfString[i]); break
                   // default: break
                }

            }
            console.log(vowels)
        }
        printVowel("baller A G aiou")
