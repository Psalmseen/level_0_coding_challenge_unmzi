        function convertHoursAndMin(time){
            hour = Math.floor(time/60)
            timeInhours = hour > 1 ? "hours" : "hour"
            minutes = time % 60
            timeInminutes = minutes > 1 ? "minutes" : "minute"
            console.log(hour+timeInhours, minutes+timeInminutes)
        }
         convertHoursAndMin(79)
