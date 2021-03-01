        function checkCommonLetters(str1, str2){
            const arrayOfString1 = str1.split("")
            const arrayOfString2 = str2.split("")
            let common = []
            for(i=0; i< arrayOfString1.length; i++){
                for(j = 0; j < arrayOfString2.length; j++){
                   if( arrayOfString1[i].toLowerCase() === arrayOfString2[j]){
                       common.push(arrayOfString2[j])
                       break
                      // console.log("this is frm str1 "+ arrayOfString1[i], "from 2 "+ arrayOfString2[j])
                   }
                }
            }
            console.log([...new Set(common)])
        }
        checkCommonLetters("labiel", "trailera")